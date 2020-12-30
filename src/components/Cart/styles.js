import styled from 'styled-components';
import { COLORS } from '../../tokens';

export const CartContainer = styled.div`
  h1 {
    color: ${COLORS.white};
    font-size: 28px;
    margin-bottom: 16px;
  }

  a {
    color: ${COLORS.white};

    svg {
      margin-left: 5px;
      color: ${(props) => (props.inverted ? COLORS.primary : COLORS.white)};
    }

    &:hover {
      color: ${COLORS.white};
    }
  }
`;
