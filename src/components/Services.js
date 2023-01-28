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
        <StyledHeading>FÅR JAG LOV ATT HJÄLPA TILL?</StyledHeading>
        <p>1. Boka in ett kostnadsfritt digitalt <StyledLink><a href="mailto: frison@friosn.com">”Jag vill prata med Frida och verkligen höra om detta stämmer – möte”.</a></StyledLink></p>
        <p>2. Ja, jag kör.Du fyller i några hälsoformulär och tar om du vill blodprover (Werlabs blodpanel XL) som jag sedan analyserar. Eventuellt andra hälsomätningar så som kroppsmått, blodtryck etc. Före-bilder kan tas om du vill.</p>
        <p>3. Vi ses över en längre kaffe, säg 90 minuter, och går igenom dina formulär samt blodprover.</p>
        <p>4. Jag sätter ihop en körplan som löper under tre månader.</p>
        <p>5. Vi hörs löpande av via telefon och sms för frågor och pepp. När tvivel och hjärnspöken dyker upp hör du av dig och är snabbt på banan igen. Vi har även digitala avstämningsmöten á 30 minuter var tredje vecka. Till dessa samlar du på dig frågor och funderingar, gnäll och tjat, som vi sedan benar ut och gör oss av med.</p>
        <p>6. Efter tre månader ses vi för ett härligt avslut tillsammans. Vi firar dina framsteg och din starkare kropp. Vi tar eventuella kroppsmått och efterbilder och jag ger dig en STOR kram och en ordentligt high five för att du varit en av få som varit så klok och valt att ta hand det mest dyrbara du har – ditt allt - din kropp.</p>
      </InnerWrapper>
    </OuterWrapper>
  )
};

export default Services;

export const StyledLink = styled.a`
font-weight: bold;
`
