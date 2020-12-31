import styled from 'styled-components';
import { COLORS } from '../../tokens';

export const ContinueButton = styled.a`
  align-items: center;
  background-color: ${COLORS.bravo};
  border-radius: 25px;
  color: ${COLORS.alfa};
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
    background-color: ${COLORS.primary};
    color: ${COLORS.white};
    text-decoration: none;
    transition: 0.2s ease-in-out;
  }
`;
