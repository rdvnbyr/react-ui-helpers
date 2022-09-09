import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <StyledHeader>
      <StyledBrand>
        <StyledLink to="/">React-Helpers</StyledLink>
      </StyledBrand>
      <StyledSubLinks>
        <StyledLink to="/buttons">Buttons</StyledLink>
        <StyledLink to="/inputs">Inputs</StyledLink>
      </StyledSubLinks>
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledBrand = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.base};
`;
const StyledSubLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light.base};
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  position: relative;
  height: 3rem;
  @media (max-width: 768px) {
    height: 50px;
  }
  @media (max-width: 480px) {
    height: 40px;
  }
`;

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.dark.base};
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0 0.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
  &:hover,
  &:focus,
  &:active,
  &:visited {
    text-decoration: underline;
  }
`;
