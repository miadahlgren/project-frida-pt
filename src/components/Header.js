
import React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import punch from '../bilder_pt/punch.jpg';
import avocado from '../bilder_pt/avocado2.jpg';
import difficult from '../bilder_pt/difficult_quote.jpg';
import { StyledCatchPhrase, StyledSubHeading } from './styles/GlobalStyles'

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeader1 />
      <StyledHeader2><StyledCatchPhrase>Hälsoresan med Frida</StyledCatchPhrase>
        <StyledSubHeading2>CERT. NUTRITION & HEALTHCOACH
        </StyledSubHeading2>
      </StyledHeader2>
      <StyledHeader3>
        <StyledNav>
          <StyledSubHeading>
            <StyledLink to="/">Hem</StyledLink>
            <StyledHeaderSpan>|</StyledHeaderSpan>
            <StyledLink to="/Contact">Kontakt</StyledLink>
            <StyledHeaderSpan>|</StyledHeaderSpan>
            <StyledLink to="/Services">Mina tjänster</StyledLink>
          </StyledSubHeading>
        </StyledNav>
      </StyledHeader3>

    </StyledHeaderContainer>
  )
}

export default Header

export const StyledHeaderContainer = styled.header`
width: 100vw;
background-position: absolute;
min-height: 74vh;
display: flex;
align-items: center;
flex-direction: row;
/* @media (min-width: 1024px) {
    min-height: 50vh;
} */
`
export const StyledHeader1 = styled.header`
background-image: linear-gradient(to top, rgba(255, 255, 255, 0.900), rgba(0, 0, 0, 0.2)), url(${punch});
background-size: cover;
background-repeat: no-repeat;
width: 33.3%;
background-position: -4vw;
min-height: 74vh;
display: flex;
align-items: center;
flex-direction: column;
/* @media (min-width: 1024px) {
    min-height: 50vh;
} */
`

export const StyledHeader2 = styled.header`
background-image: linear-gradient(rgba(255, 255, 255, 0.900), rgba(0, 0, 0, 0.3)), url(${avocado});
background-size: cover;
background-repeat: no-repeat;
width: 33.3%;
background-position: absolute;
min-height: 74vh;
display: flex;
align-items: center;
flex-direction: column;
/* @media (min-width: 1024px) {
    min-height: 50vh;
} */
`

export const StyledHeader3 = styled.header`
background-image:  linear-gradient(rgba(255, 255, 255, 0.900), rgba(0, 0, 0, 0.3)),  url(${difficult});
background-size: cover;
background-repeat: no-repeat;
width: 33.3%;
background-position: absolute;
min-height: 74vh;
display: flex;
align-items: center;
flex-direction: column;
/* @media (min-width: 1024px) {
    min-height: 50vh;
} */
`

const StyledNav = styled.nav`
color: #555;
margin-top: 3vh;
font-size: .9em;
font-weight: 500;
letter-spacing: 3px;
text-transform: uppercase;
display: none;
@media (min-width: 1024px) {
    display: flex;
  }
`

const StyledHeaderSpan = styled.span`
margin: 0 1.5em;
`

const StyledLink = styled(NavLink)`
    font-weight: 700;
    color: grey;
    text-decoration: none;
    &:hover {
text-decoration: underline;
color: silver;
  }
`
export const StyledSubHeading2 = styled.h3`
  font-family: 'Lato', sans-serif;
  color: grey;
  font-size: .65em;
  letter-spacing: .4em;
  text-transform: uppercase;
  text-align: center;
  margin-top: -35px;
  @media (min-width: 667px) {
  font-size: 0.65em;
  }
`