import styled from 'styled-components';

export default function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors[props.color].base};
  color: ${(props) => props.theme.colors[props.color].contrast};
  border: 1px solid ${(props) => props.theme.colors[props.color].base};
  border-radius: ${(props) => props.theme.shape.borderRadius[props.radius] || '0'};
  padding: ${(props) => props.theme.units.padding[props.size] || '0'};
  font-size: ${(props) => props.theme.units.font.size[props.size] || 'inherit'};
  font-weight: ${(props) => props.theme.units.font.weight[props.fw] || props.theme.units.font.weight.regular};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.colors[props.color].dark};
    color: ${(props) => props.theme.colors[props.color].contrast};
    border: 1px solid ${(props) => props.theme.colors[props.color].dark};
  }
  &:active {
    background-color: ${(props) => props.theme.colors[props.color].light};
    color: ${(props) => props.theme.colors[props.color].contrast};
    border: 1px solid ${(props) => props.theme.colors[props.color].light};
  }
`;
