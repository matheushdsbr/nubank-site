import styled from 'styled-components';
import { COLORS } from '../../tokens';

export const SectionForm = styled.div`
  margin-bottom: 16px;
  background: ${COLORS.white};

  .formGroup {
    position: relative;
    width: 100%;

    input {
      border: none;
      border-bottom: 1px solid ${COLORS.lightGray};
      font-weight: bold;
      outline: none;
      padding: 8px 0;
      transition: all 0.2s ease-out;
      width: 100%;

      &:focus {
        border-bottom: 1px solid ${COLORS.secundary};
      }

      &:focus ~ label,
      &:valid ~ label {
        font-size: 12px;
        padding: 0px 0px;
        top: -15px;
      }
    }

    label {
      color: ${COLORS.gray};
      cursor: text;
      font-weight: 450;
      left: 0;
      padding: 7px 3px;
      position: absolute;
      top: 0;
      transition: all 0.2s ease-out;
    }
  }
`;
