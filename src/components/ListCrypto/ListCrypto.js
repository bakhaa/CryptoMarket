import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ItemCrypto from './ItemCrypto';

const List = styled.FlatList`
  flex: 1;
  width: 100%;
  /* align-items: center; */
`;

const data = [
  { chartName: 'Bitcoin', changepc: -0.93, updateduk: 'Sep 22, 2018 at 13:18 BST', rate_float: 6690.0663, },
  { chartName: 'Ethereum', changepc: -3.44, updateduk: 'Sep 22, 2018 at 13:18 BST', rate_float: 5117.4658, },
  { chartName: 'Bitcoin Cash', changepc: -4.44, updateduk: 'Sep 22, 2018 at 13:18 BST', rate_float: 5689.9013, },
  { chartName: 'Litecoin', changepc: -2.98, updateduk: 'Sep 22, 2018 at 13:18 BST', rate_float: 40202.5, },
  { chartName: 'XRP', changepc: 0.81, updateduk: 'Sep 22, 2018 at 13:18 BST', rate_float: 6690.0663, },
];

const ListCrypto = ({ handlePress }) => (
  <List
    data={data}
    renderItem={
      ({ item, index }) => (
        <ItemCrypto
          key={index}
          item={item}
          idx={index}
          handlePress={handlePress}
        />)
    }
  />
);

ListCrypto.propTypes = {
  handlePress: PropTypes.func.isRequired,
};

export default ListCrypto;
