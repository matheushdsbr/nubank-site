import styled from 'styled-components';
import { COLORS } from '../../tokens';

export const SectionPix = styled.section`
  background: ${COLORS.primary};
  padding: 48px 16px;
`;

export const SectionImg = styled.div`
  margin-top: 40px;
  text-align: center;

  img {
    width: 190px;
  }
`;

export const SectionForm = styled.div`
  display: flex;
  justify-content: center;

  .formContent {
    background: ${COLORS.white};
    border-radius: 16px;
    padding: 24px;
    margin-top: 35px;
    width: 310px;

    h3 {
      color: ${COLORS.secundary};
      font-size: 20px;
      margin-bottom: 32px;
    }
  }
`;
