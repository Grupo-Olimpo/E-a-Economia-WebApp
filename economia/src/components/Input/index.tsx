import React, { InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import InputText from './Text';
import SelectText from './Select';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  label?: string;
  control?: string;
  icon?: React.ComponentType<IconBaseProps>;
  error?: string;
  touched: boolean;
}

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  type: string;
  label?: string;
  control?: string;
  icon?: React.ComponentType<IconBaseProps>;
  error?: string;
  touched: boolean;
  options?: { key: string; value: string }[];
}

const Input: React.FC<IInputProps & ISelectProps> = ({
  name,
  type,
  control,
  ...rest
}) => {
  switch (control) {
    case 'select':
      return <SelectText name={name} type={type} {...rest} />;
    default:
      return <InputText name={name} type={type} {...rest} />;
  }
};

export default Input;
