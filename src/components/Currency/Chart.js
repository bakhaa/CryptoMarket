import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Grid, LineChart, YAxis } from 'react-native-svg-charts';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const ChartView = styled.View`
  height: 200;
  padding-left: 20;
  padding-right: 20;
  padding-top: 30;
  flex-direction: row;
`;

const Text = styled.Text`
  color: #5d6977;
`;

const Chart = ({ data }) => {
  if (!data) return (<Text>No correctly data.</Text>);

  const axesSvg = { fontSize: 10, fill: '#ffffff' };
  const verticalContentInset = { top: 10, bottom: 10 };
  const xAxisHeight = 30;

  return (
    <Container>
      <ChartView>
        <YAxis
          data={data}
          style={{ marginBottom: xAxisHeight }}
          contentInset={verticalContentInset}
          svg={axesSvg}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <LineChart
            style={{ flex: 1 }}
            data={data}
            contentInset={verticalContentInset}
            svg={{ strokeWidth: 2, stroke: 'rgb(134, 65, 244)' }}
          >
            <Grid />
          </LineChart>
        </View>
      </ChartView>
      <Text>Graph created at last 24h.</Text>
    </Container>
  );
};


Chart.propTypes = {
  data: PropTypes.any,
};

export default Chart;
