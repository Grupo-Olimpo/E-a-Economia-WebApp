import React, { useCallback, useRef, useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { ISelectProps } from '..';
import { LabelInput } from '../Text/styles';
import { Container, ErrorInput, ErrorTooltip } from './styles';

const SelectText: React.FC<ISelectProps> = ({
  name,
  label,
  error,
  value,
  touched,
  icon: Icon,
  options,
  ...rest
}) => {
  const [focused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const selectRef = useRef<HTMLSelectElement>(null);
  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!selectRef.current?.value);
  }, []);
  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <>
      {label && <LabelInput htmlFor={name}>{label}</LabelInput>}
      <Container
        isErrored={!!error && touched}
        isFocused={focused}
        isFilled={isFilled}
      >
        {!!Icon && <Icon size={20} />}
        <select
          ref={selectRef}
          name={name}
          value={value}
          onFocus={handleFocus}
          onBlurCapture={handleBlur}
          {...rest}
        >
          {options?.map((option) => {
            return (
              <option key={option.key} value={option.value}>
                {option.key}
              </option>
            );
          })}
        </select>
        {error && touched && (
          <ErrorTooltip title={error}>
            <FiAlertCircle size={20} />
          </ErrorTooltip>
        )}
      </Container>
      {error && touched && (
        <ErrorInput>
          <span>{error}</span>
        </ErrorInput>
      )}
    </>
  );
};

export default SelectText;
