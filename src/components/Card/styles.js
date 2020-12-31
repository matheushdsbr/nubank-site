import styled from 'styled-components';
import { COLORS } from '../../tokens';

export const CardContainer = styled.div`
  h1 {
    color: ${COLORS.white};
    font-size: 28px;
    margin-bottom: 16px;
  }

  a {
    color: ${COLORS.white};
    font-weight: 500;
    display: inline-block;
    text-decoration: none;

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background-color: ${COLORS.white};
      transition: width 0.2s;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover {
      color: ${COLORS.white};
    }

    svg {
      color: ${(props) => (props.inverted ? COLORS.primary : COLORS.white)};
      margin-left: 5px;
    }
  }
`;
