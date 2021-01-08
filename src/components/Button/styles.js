import styled from 'styled-components';
import { colors } from '../../tokens';

export const ContinueButton = styled.a`
  align-items: center;
  background-color: ${colors.bravo};
  border-radius: 25px;
  color: ${colors.alfa};
  cursor: pointer;
  display: flex;
  font-weight: 600;
  height: 48px;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 20px;
  transition: 0.2s ease-in-out;
  width: 100%;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.white};
    text-decoration: none;
    transition: 0.2s ease-in-out;
  }
`;
