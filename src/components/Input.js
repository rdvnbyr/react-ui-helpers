import styled, { css } from 'styled-components';

export default function Input(props) {
  return (
    <StyledInputContainer>
      {props.label && <StyledLabel>{props.label}</StyledLabel>}
      <StyledInput {...props} />
      {props.feedback && <StyledFeedback>{props.feedback}</StyledFeedback>}
    </StyledInputContainer>
  );
}

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.light.base};
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  margin: 1rem;
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 1rem;
  `}
`;

const StyledLabel = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
  &:focus {
    outline: none;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => css`
      color: ${theme.colors.black};
    `}
  }
`;

const StyledFeedback = styled.p`
  font-size: 0.675rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;
