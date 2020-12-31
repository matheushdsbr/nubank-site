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

    svg {
      color: ${(props) => (props.inverted ? COLORS.primary : COLORS.white)};
      margin-left: 5px;
    }

    &:hover {
      color: ${COLORS.white};
    }
  }
`;
