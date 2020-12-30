import React from 'react';
import { SectionPix, SectionImg } from './styles';
import Cart from '../Cart';
import ImgPix from '../../images/pix-transfer.png';

const Pix = () => (
  <>
    <SectionPix>
      <Cart
        title="Pix: um novo jeito de fazer transferências e pagamentos"
        linkText="Saiba como funciona"
      />

      <SectionImg>
        <img src={ImgPix} alt="" />
      </SectionImg>
    </SectionPix>
  </>
);

export default Pix;
