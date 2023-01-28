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
          <StyledHeading>KONTAKT</StyledHeading>
          <section className="section footer">
            <div className="footer-header">
              <a href="mailto: frida.frison@mail.comm">Frida Gylner-Törnby</a><br />
              <a href="tel: +4674444444"> +467 444 44 44</a><br />
              <a href="mailto: frida.frison@mail.comm"> frida.frison@mail.com</a><br />
              <a href="mailto: frida.frison@mail.comm">Stockholm, Sweden.</a><br />
            </div>
          </section>
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
margin: 10vh 0 5vh 0;
`

export const ProfilePic = styled.div`
background-image: url(${Frida});
background-size: 60%;
background-repeat: no-repeat;
background-position: absolute;
min-height: 50vh;
margin: 1vh 0 8vh 0;
background-position-x: 50%;
width: 30vw;
`
/* export const Box = styled.div`
width: 70vw;
padding: 30px;
border: 1px solid grey;
margin: 10px;
` */

