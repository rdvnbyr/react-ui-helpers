import React from 'react';
import Button from '../components/Button';
import styled from 'styled-components';

export default function Buttons() {
  return (
    <div className="App">
      <ButtonContainer>
        <Button color="primary" size="md">
          Primary
        </Button>
        <Button color="secondary" size="md">
          Secondary
        </Button>
        <Button color="info" size="md">
          Info
        </Button>
        <Button color="success" size="md">
          Success
        </Button>
        <Button color="warning" size="md">
          Warning
        </Button>
        <Button color="danger" size="md">
          Danger
        </Button>
        <Button color="light" size="md">
          Light
        </Button>
        <Button color="dark" size="md">
          Dark
        </Button>
      </ButtonContainer>
    </div>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  & button {
    margin: 0.5rem;
  }
`;
