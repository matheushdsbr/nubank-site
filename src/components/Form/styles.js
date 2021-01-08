import styled from 'styled-components';
import { colors } from '../../tokens';

export const SectionForm = styled.div`
  background: ${colors.white};
  margin-bottom: 16px;

  .formGroup {
    margin-bottom: 40px;
    position: relative;
    width: 100%;

    input {
      border: none;
      border-bottom: 1px solid ${colors.lightGray};
      font-weight: bold;
      outline: none;
      padding: 8px 0;
      transition: all 0.2s ease-out;
      width: 100%;

      &:focus {
        border-bottom: 1px solid ${colors.secundary};
      }

      &:focus ~ label,
      &:valid ~ label {
        font-size: 12px;
        padding: 0px 0px;
        top: -15px;
      }
    }

    label {
      color: ${colors.gray};
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
