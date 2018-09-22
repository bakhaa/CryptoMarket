import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #111c2b;
`;

const Container = ({ children }) => (
  <StyledContainer>
    {children}
  </StyledContainer>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
