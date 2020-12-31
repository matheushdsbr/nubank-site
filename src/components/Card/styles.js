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
    display: inline-block;
    font-weight: 500;
    text-decoration: none;

    &::after {
      content: '';
      background-color: ${COLORS.white};
      display: block;
      height: 2px;
      transition: width 0.2s;
      width: 0;
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
