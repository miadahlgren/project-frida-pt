/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components/macro';
import Footer from './Footer';
import Header from './Header';
import Frida from '../bilder_pt/Frida1.jpg';
import { OuterWrapper, StyledHeading } from './styles/GlobalStyles';

const Contact = () => {
  return (
    <>
      <OuterWrapper>
        <Header />
        <StyledSection>
          <StyledHeading>OM MIG</StyledHeading>
          <p>Donec semper nec nisl quis gravida. Vivamus erat lacus, viverra vel sodales a, elementum ut ligula. Vestibulum quis magna eu est interdum elementum. Maecenas vulputate libero et est vulputate, non finibus lectus ultrices. Fusce placerat interdum volutpat. Integer interdum elit sit amet arcu sagittis, eu iaculis ipsum bibendum. Quisque condimentum pretium fermentum. Donec lorem purus, commodo sed efficitur at, dapibus id orci. Nunc luctus lectus eget nisl auctor volutpat.
Cras consectetur vulputate ultrices.
          </p>

        </StyledSection>
        <ProfilePic />
      </OuterWrapper>
      <Footer />
    </>
  )
};

export default Contact;

export const StyledSwiperDiv = styled.div`
width: 70vw;
`
export const StyledSection = styled.section`
margin: 4vh 0 5vh 0;
text-align: center;
padding: 0 30vw 0 30vw;

.name {
    font-weight: bold;
}
`

export const ProfilePic = styled.div`
background-image: url(${Frida});
background-size: 60%;
background-repeat: no-repeat;
background-position: absolute;
min-height: 50vh;
margin: 1vh 0 2vh 0;
background-position-x: 50%;
width: 30vw;
`
/* export const Box = styled.div`
width: 70vw;
padding: 30px;
border: 1px solid grey;
margin: 10px;
` */

