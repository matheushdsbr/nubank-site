import React from 'react';
import { SectionPix } from './styles';
import { COLORS } from '../../tokens';
import Cart from '../Cart';

const Pix = () => (
  <>
    <SectionPix>
      <Cart
        title="Pix: um novo jeito de fazer transferências e pagamentos"
        linkText="Saiba como funciona"
        colorSVG={COLORS.white}
      />
    </SectionPix>
  </>
);

export default Pix;
