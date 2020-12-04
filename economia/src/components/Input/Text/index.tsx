import React, { useCallback, useRef, useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { IInputProps } from '..';
import { Container, ErrorInput, ErrorTooltip, LabelInput } from './styles';

const InputText: React.FC<IInputProps> = ({
  name,
  type,
  label,
  error,
  value,
  touched,
  icon: Icon,
  ...rest
}) => {
  const [focused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
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
        <input
          ref={inputRef}
          name={name}
          type={type}
          value={value}
          onFocus={handleFocus}
          onBlurCapture={handleBlur}
          {...rest}
        />
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

export default InputText;
