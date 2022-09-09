import styled, { css } from 'styled-components';
import { darken } from 'polished';

export default function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

const StyledButton = styled.button`
  border-radius: ${(props) => props.theme.shape.borderRadius[props.radius] || '0'};
  padding: ${(props) => props.theme.units.padding[props.size] || '0'};
  font-size: ${(props) => props.theme.units.font.size[props.size] || 'inherit'};
  font-weight: ${(props) =>
    props.theme.units.font.weight[props.fw] || props.theme.units.font.weight.regular};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:active {
    transform: translateY(0.25rem);
  }

  ${(props) =>
    props.color &&
    css`
      background-color: ${(props) => props.theme.colors[props.color].base};
      color: ${(props) => props.theme.colors[props.color].contrast};
      border: 1px solid ${(props) => props.theme.colors[props.color].base};
      &:hover {
        background-color: ${darken(0.1, props.theme.colors[props.color].base)};
        color: ${(props) => props.theme.colors[props.color].contrast};
        border: 1px solid ${darken(0.1, props.theme.colors[props.color].base)};
      }
    `}
  ${(props) =>
    props.outlined &&
    props.color &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors[props.color].base};
      border: 1px solid ${(props) => props.theme.colors[props.color].base};
      ${(props) =>
        props.color === 'light' &&
        css`
          color: ${(props) => props.theme.colors[props.color].contrast};
        `}
      &:hover {
        background-color: ${(props) => props.theme.colors[props.color].base};
        color: ${(props) => props.theme.colors[props.color].contrast};
        border: 1px solid ${(props) => props.theme.colors[props.color].base};
      }
    `}
    ${(props) =>
    props.inverted &&
    props.color &&
    css`
      background-color: ${(props) => props.theme.colors[props.color].contrast};
      color: ${(props) => props.theme.colors[props.color].base};
      border: 1px solid ${(props) => props.theme.colors[props.color].contrast};
      &:hover {
        background-color: ${(props) => props.theme.colors[props.color].light};
        color: ${(props) => props.theme.colors[props.color].dark};
        border: 1px solid ${(props) => props.theme.colors[props.color].contrast};
      }
    `}
  ${(props) =>
    props.invertedOutlined &&
    props.color &&
    css`
      background-color: transparent;
      color: ${(props) => props.theme.colors[props.color].base};
      border: 1px solid ${(props) => props.theme.colors[props.color].contrast};
      &:hover {
        background-color: ${(props) => props.theme.colors[props.color].contrast};
        color: ${(props) => props.theme.colors[props.color].base};
        border: 1px solid ${(props) => props.theme.colors[props.color].base};
      }
    `}

  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
  ${(props) =>
    props.shape &&
    css`
      border-radius: ${(props) => props.theme.shape.borderRadius[props.shape] || '0'};
    `}
  ${(props) =>
    props.disabled &&
    css`
      background-color: ${(props) => props.theme.colors.gray[500]};
      color: ${(props) => props.theme.colors[props.color].gray[800]};
      border: 1px solid ${(props) => props.theme.colors.gray[800]};
      &:hover {
        background-color: ${(props) => props.theme.colors.colors.gray[300]};
      }
    `}
`;
