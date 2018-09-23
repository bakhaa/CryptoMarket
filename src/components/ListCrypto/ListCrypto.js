import React, { Component } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchCurrency } from '../../store/actions/currency';
import {
  getLoading,
  getLoaded,
  getCurrencyList,
  getSelectedCurrency,
} from '../../selectors/currency';

import ItemCrypto from './ItemCrypto';

const List = styled.FlatList`
  flex: 1;
  width: 100%;
`;

class ListCrypto extends Component {
  componentDidMount() {
    const { loaded, loading, onFetchCurrency } = this.props;
    if (!loaded && !loading) {
      onFetchCurrency();
    }
  }

  keyExtractor = (item, index) => index.toString();

  render() {
    const { handlePress, list, loading, selected } = this.props;
    if (loading) return (<ActivityIndicator size="large" color="#ffffff" />);
    if (list.length === 0) return (<Text>No data</Text>);

    return (
      <List
        data={list}
        keyExtractor={this.keyExtractor}
        renderItem={
          ({ item, index }) => (
            <ItemCrypto
              item={item}
              selectedCurrency={selected}
              idx={index}
              handlePress={handlePress}
            />)
        }
      />
    );
  }
}

ListCrypto.propTypes = {
  handlePress: PropTypes.func.isRequired,
  onFetchCurrency: PropTypes.func.isRequired,
  loaded: PropTypes.bool,
  list: PropTypes.array,
  selected: PropTypes.string,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  loading: getLoading(state),
  loaded: getLoaded(state),
  selected: getSelectedCurrency(state),
  list: getCurrencyList(state),
});

const mapDispatchToProps = dispatch => ({
  onFetchCurrency: () => {
    dispatch(fetchCurrency());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCrypto);
