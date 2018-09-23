import React from 'react';
import { Picker } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  getSelectedCurrency,
} from '../../selectors/currency';
import { changeSelected } from '../../store/actions/currency';

const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-start;
`;

const Item = styled.View`
  height: 100;
  margin-top: 20;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Label = styled.Text`
  color: #ffffff;
  font-size: 20;
`;

const currencies = ['USD', 'GBP', 'EUR', 'CNY'];

const CurrencySettings = ({ selected, onChangeSelected }) => (
  <Container>
    <Item>
      <Label>Selected currency: </Label>
      <Picker
        selectedValue={selected}
        style={{
          height: 210,
          width: 100,
          color: '#ffffff',
        }}
        itemStyle={{ color: '#ffffff', fontSize: 20 }}
        onValueChange={itemValue => onChangeSelected(itemValue)}
      >
        {currencies.map((item, idx) => (
          <Picker.Item key={idx} label={item} value={item} />
        ))}
      </Picker>
    </Item>
  </Container>
);

CurrencySettings.propTypes = {
  selected: PropTypes.string,
  onChangeSelected: PropTypes.func,
};

const mapStateToProps = state => ({
  selected: getSelectedCurrency(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeSelected: (selected) => {
    dispatch(changeSelected(selected));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencySettings);
