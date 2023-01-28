/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components/macro';
import linkedin from '../icons/linkedin.png';
import facebook from '../icons/facebook.png';
import instagram from '../icons/instagram2.png';

const Footer = () => {
  return (
    <CopyDiv>
      <FooterDiv>
        <SectionStyling>
          <H4>KONTAKT</H4>
          <section className="section footer">
            <div className="footer-header">
              <a className="name" href="mailto: frida.frison@mail.comm">Frida Gylner-Törnby</a><br />
              <a href="tel: +4674444444"> Tel: (+46)7 444 44 44</a><br />
              <a href="mailto: frida.frison@mail.comm"> frida.frison@mail.com</a><br />
              <a href="mailto: frida.frison@mail.comm">Stockholm, Sweden.</a><br />
            </div>
          </section>
          <section className="section more">
            <div className="big-social-media-links">

              <div className="logo">
                <a
                  href="https://www.linkedin.com/in/frida-gylner-3ba43890?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABNJGz4By7gkwZcN8f3yDveujU27LLUwmm4&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BmsrIJYLQT3maZvBbTKelAg%3D%3D"
                  target="_blank"
                  rel="noreferrer">
                  <img alt="LinkedIn" src={linkedin} />
                </a>

              </div>

              <div className="logo">
                <a href="https://www.linkedin.com/in/frida-gylner-3ba43890?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABNJGz4By7gkwZcN8f3yDveujU27LLUwmm4&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BmsrIJYLQT3maZvBbTKelAg%3D%3D" target="_blank" rel="noreferrer">
                  <img alt="Facebook" src={facebook} />
                </a>
              </div>

              <div className="logo">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer">
                  <img className="insta" alt="Instagram" src={instagram} />
                </a>
              </div>
            </div>
          </section>
        </SectionStyling>
      </FooterDiv>
      <StyledFooterText>© Mia Dahlgren 2023</StyledFooterText>

    </CopyDiv>
  )
};

export default Footer;

const SectionStyling = styled.section`
  .section.more{
    align-items:center;
    flex-direction: column;
    } 
    
    .section.more img{
    margin: 0;
    height: 40px;
    width: 40px;
    border: tan solid 2.5px;
    border-radius: 50%;
    padding: 1px;

    &:hover {
    border: #bdd1ac solid 2.5px;
  }
}
    
    .big-social-media-links{
      display: flex;
      flex-direction: row;
      margin-top: 4vh;
      gap: 4vw;
       }
       @media (min-width: 667px) and (max-width: 1024px){
           }
      
      @media (min-width: 1024px) {
          }


          `

export const H4 = styled.h4`
font-size: 18px;
font-family: 'Cormorant Garamond', serif;
color: var(--color-darkBlack);
font-weight: 400;
text-align: center;
@media (min-width: 667px) and (max-width: 1024px) {
    font-size: 18px;
}
@media (min-width: 1024px) {
    font-size: 18px;
}
`

export const StyledFooterText = styled.span`
font-size: 10px;
justify-content: center;
margin-top: 5vh;
`

export const CopyDiv = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #ebeadf;
padding-top: 10px;
text-align: center;
font-size: 16px;

.name {
    font-weight: bold;
}
`

export const FooterDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`
