import React from 'react';
import Container from '../components/Container';
import Currency from '../components/Currency/Currency';

const ScreenItemCrypto = ({ chartName }) => (
  <Container backgroundColor="#c95e0c">
    <Currency chartName={chartName} />
  </Container>
);

export default ScreenItemCrypto;
