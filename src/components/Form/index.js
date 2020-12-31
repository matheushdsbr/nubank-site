import React from 'react';
import { SectionForm } from './styles';

const Form = () => (
  <>
    <SectionForm>
      <div className="formGroup">
        <input
          type="text"
          id="cpf"
          name="cpf"
          autoComplete="off"
          required="required"
        />
        <label htmlFor="cpf">Digite seu CPF</label>
      </div>
    </SectionForm>
  </>
);

export default Form;
