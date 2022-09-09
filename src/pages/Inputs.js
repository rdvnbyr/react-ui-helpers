import React from 'react';
import styled from 'styled-components';
// import { colors, shapes, sizes } from '../assets/helpers/theme-helper';
import {Input} from '../components/Input';

export default function Inputs() {
  return (
    <>
      <InputContainer>
        <Input placeholder="Placeholder" />
      </InputContainer>
    </>
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
