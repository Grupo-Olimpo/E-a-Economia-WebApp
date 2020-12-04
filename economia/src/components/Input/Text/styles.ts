import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored?: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  width: 100%;
  background: #fff;
  padding: 16px;
  margin-bottom: 5px;
  border-radius: 10px;
  border: 2px solid #d1d1d1;
  color: rgba(38, 38, 38, 1);

  & + div {
    margin-top: 16px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: rgba(222, 0, 0, 1);
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #00ddc0;
      border-color: #00ddc0;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #00ddc0;
    `}

    ${(props) =>
    !props.isFocused &&
    css`
      &:hover {
        border-color: #00ddc0;
      }
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  input::placeholder {
    color: #a1a1a1;
  }

  svg {
    color: #a1a1a1;
    margin-right: 10px;
    ${(props) =>
      props.isFocused &&
      css`
        color: #00ddc0;
      `}
  }
`;

export const ErrorTooltip = styled.div`
  height: 20px;
  margin-left: 10px;

  svg {
    margin-right: 0px;
    color: rgba(222, 0, 0, 1);
  }
`;

export const ErrorInput = styled.span`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  font-weight: 500;
  color: rgba(222, 0, 0, 1);
`;

export const LabelInput = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #000;
`;
