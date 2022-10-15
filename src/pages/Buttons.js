import React from 'react';
import Button from '../components/Button';
import styled from 'styled-components';
import { colors, shapes, sizes } from '../assets/helpers/theme-helper';

const Title = ({text}) => (
  <h1 style={{ margin: '1rem', borderBottom: ".5px solid gray", color: "GrayText" }}>{text}</h1>
)

export default function Buttons() {
  return (
    <div>
      <div>
        <Title text={"Sizes"} />
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
      <Title text={"Outlined"} />
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
        <Title text={"Inverted"} />
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
        <Title text={"inverted Outline"} />
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
        <Title text={"Shapes"} />
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
