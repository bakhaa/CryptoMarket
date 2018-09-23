import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Chart from './Chart';

import {
  getCurrency,
} from '../../selectors/currency';

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const Currency = ({ currency }) => {
  const data = currency.graph_data.d;
  return (
    <Container>
      <Chart data={data} />
    </Container>
  );
};

Currency.propTypes = {
  currency: PropTypes.any,
};

const mapStateToProps = (state, ownProps) => ({
  currency: getCurrency(state, ownProps.chartName),
});

export default connect(mapStateToProps)(Currency);
