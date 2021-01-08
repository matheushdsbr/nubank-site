import styled from 'styled-components';
import { colors } from '../../tokens';

export const CardContainer = styled.div`
  h1 {
    color: ${colors.white};
    font-size: 28px;
    margin-bottom: 16px;
  }

  a {
    color: ${colors.white};
    display: inline-block;
    font-weight: 500;
    text-decoration: none;

    &::after {
      content: '';
      background-color: ${colors.white};
      display: block;
      height: 2px;
      transition: 0.2s;
      width: 0;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover {
      color: ${colors.white};
    }

    svg {
      color: ${(props) => (props.inverted ? colors.primary : colors.white)};
      margin-left: 5px;
    }
  }
`;
