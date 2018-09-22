import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const Item = styled.View`
  background: ${props => props.odd ? '#0d141c' : '#111c2b'};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 80;
  padding-left: 15;
  padding-right: 15;
`;

const ItemBlock = styled.View`
  justify-content: center;
  align-items: ${props => props.right ? 'flex-end' : 'flex-start'};
`;

const ChartName = styled.Text`
  color: #FFFFFF;
  font-size: 22;
`;

const UpdateDate = styled.Text`
  color: #5d6977;
  margin-top: 5;
  font-size: 12;
`;

const CurrentCourse = styled.Text`
  color: ${props => props.low ? '#ff3463' : '#009e6f'};;
  font-size: 22;
`;

const Currency = styled.Text`
  color: #5d6977;
  font-size: 20;
`;

const ChangePC = styled.Text`
  color: #FFFFFF;
  margin-top: 5;
  font-size: 12;
`;

const ItemCrypto = ({ item, idx, handlePress }) => (
  <TouchableOpacity
    style={{ width: '100%' }}
    onPress={handlePress.bind(null, item)}
  >
    <Item odd={idx % 2 === 0}>
      <ItemBlock>
        <ChartName>{item.chartName}</ChartName>
        <UpdateDate>{item.updateduk}</UpdateDate>
      </ItemBlock>
      <ItemBlock right>
        <CurrentCourse low={item.changepc > 0}>
          {item.rate_float}
          <Currency> USD</Currency>
        </CurrentCourse>
        <ChangePC>{`${item.changepc > 0 ? '+' : ''}${item.changepc}`}</ChangePC>
      </ItemBlock>
    </Item>
  </TouchableOpacity>
);

ItemCrypto.propTypes = {
  item: PropTypes.any,
  idx: PropTypes.any,
  handlePress: PropTypes.func,
};

export default ItemCrypto;
