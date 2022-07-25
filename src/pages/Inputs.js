import React from 'react';
import Button from '../components/Button';
import styled from 'styled-components';
import { colors, shapes, sizes } from '../assets/helpers/theme-helper';
import Input from '../components/Input';

export default function Inputs() {
  return (
    <div>
      {/*       <div>
        <h1 style={{ margin: '1rem' }}>Sizes</h1>
        {sizes.map((size) => (
          <InputContainer>
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
          </InputContainer>
        ))}
      </div> */}
      <InputContainer>
        <Input placeholder="Placeholder" />
      </InputContainer>
    </div>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 1.5rem;
  & button {
    margin: 0.5rem;
  }
`;
