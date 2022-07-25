import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">Home</Link>
      <Link to="/buttons">Buttons</Link>
      <Link to="/inputs">Inputs</Link>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  position: relative;
  height: 60px;
  @media (max-width: 768px) {
    height: 50px;
  }
  @media (max-width: 480px) {
    height: 40px;
  }
  & a {
    color: #000;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0 0.5rem;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
  & a:hover,
  & a:focus,
  & a:active,
  & a:visited {
    color: #000;
    text-decoration: underline;
  }
`;
