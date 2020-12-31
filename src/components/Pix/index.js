import React from 'react';
import { SectionPix, SectionImg, SectionForm } from './styles';
import Card from '../Card';
import ImgPix from '../../images/pix-transfer.png';
import Form from '../Form';

const Pix = () => (
  <>
    <SectionPix>
      <Card
        title="Pix: um novo jeito de fazer transferências e pagamentos"
        linkText="Saiba como funciona"
      />

      <SectionImg>
        <img src={ImgPix} alt="" />
      </SectionImg>

      <SectionForm>
        <div className="formContent">
          <h3>Peça sua conta e cartão de crédito do Nubank</h3>
          <Form />
        </div>
      </SectionForm>
    </SectionPix>
  </>
);

export default Pix;
