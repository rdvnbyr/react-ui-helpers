import React from 'react';
import Button from '../components/Button';
import styled from 'styled-components';
import { colors, shapes, sizes } from '../assets/helpers/theme-helper';

export default function Buttons() {
  return (
    <div>
      <div>
        <h1 style={{ margin: '1rem' }}>Sizes</h1>
        {sizes.map((size) => (
          <ButtonContainer>
            {colors.map((color) => (
              <Button color={color.toLowerCase()} size={size}>
                {color
                  .split('')
                  .reduce(
                    (str, cur, i) =>
                      i === 0 ? str + cur.toLocaleUpperCase() : str + cur,
                    ''
                  )}
              </Button>
            ))}
          </ButtonContainer>
        ))}
      </div>

      <div>
        <h1 style={{ margin: '1rem' }}>Outlined</h1>
        {sizes.map((size) => (
          <ButtonContainer>
            {colors.map((color) => (
              <Button
                color={color !== 'default' && color.toLowerCase()}
                size={size}
                outlined
              >
                {color
                  .split('')
                  .reduce(
                    (str, cur, i) =>
                      i === 0 ? str + cur.toLocaleUpperCase() : str + cur,
                    ''
                  )}
              </Button>
            ))}
          </ButtonContainer>
        ))}
      </div>

      <div>
        <h1 style={{ margin: '1rem' }}>Inverted</h1>
        {sizes.map((size) => (
          <ButtonContainer>
            {colors.map((color) => (
              <Button
                color={color !== 'default' && color.toLowerCase()}
                size={size}
                inverted
              >
                {color
                  .split('')
                  .reduce(
                    (str, cur, i) =>
                      i === 0 ? str + cur.toLocaleUpperCase() : str + cur,
                    ''
                  )}
              </Button>
            ))}
          </ButtonContainer>
        ))}
      </div>

      <div>
        <h1 style={{ margin: '1rem' }}>inverted Outline</h1>
        {sizes.map((size) => (
          <ButtonContainer>
            {colors.map((color) => (
              <Button
                color={color !== 'default' && color.toLowerCase()}
                size={size}
                invertedOutlined
              >
                {color
                  .split('')
                  .reduce(
                    (str, cur, i) =>
                      i === 0 ? str + cur.toLocaleUpperCase() : str + cur,
                    ''
                  )}
              </Button>
            ))}
          </ButtonContainer>
        ))}
      </div>

      <div>
        <h1 style={{ margin: '1rem' }}>Shapes</h1>
        {shapes.map((shape) => (
          <ButtonContainer>
            {colors.map((color) => (
              <Button color={color.toLowerCase()} size={"md"} shape={shape}>
                {color
                  .split('')
                  .reduce(
                    (str, cur, i) =>
                      i === 0 ? str + cur.toLocaleUpperCase() : str + cur,
                    ''
                  )}
              </Button>
            ))}
          </ButtonContainer>
        ))}
      </div>
    </div>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 1.5rem;
  & button {
    margin: 0.5rem;
  }
`;
