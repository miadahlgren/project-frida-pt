/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components/macro';
import Header from './Header';
import { InnerWrapper, OuterWrapper, StyledHeading } from './styles/GlobalStyles';

const Services = () => {
  return (
    <OuterWrapper>
      <Header />
      <InnerWrapper>
        <StyledHeading>MINA TJÄNSTER</StyledHeading>

      </InnerWrapper>
    </OuterWrapper>
  )
};

export default Services;

export const StyledSwiperDiv = styled.div`
width: 70vw;
`

/* export const Box = styled.div`
width: 70vw;
padding: 30px;
border: 1px solid grey;
margin: 10px;
` */

