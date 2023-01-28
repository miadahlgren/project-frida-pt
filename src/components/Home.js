/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components/macro';
import Header from './Header';
import Footer from './Footer';
import { InnerWrapper, OuterWrapper, StyledHeading } from './styles/GlobalStyles';
import SwiperIntro from './Swiper';

const Home = () => {
  return (
    <>
      <OuterWrapper>
        <Header />
        <InnerWrapper>

          <StyledHeading>VAD TANKAR DU BILEN MED?</StyledHeading>
          <p>Likt en bil behöver bränsle för att gå framåt behöver din kropp
            bränsle/energi för att fungera. Maten du stoppar i munnen avgör huruvida du väljer
            att köra din bil (kropp) på högkvalitativt bränsle som ger näring och energi och
            skickar dig pigg och alert framåt, eller på fulbränsle/fel bränsle, som tvingar in kroppen
            i ett läge där den motvilligt får kämpa med att orkeslöst hacka sig framåt och sakta bryts ner.
          </p>

          <StyledHeading>RESPEKT FÖR DET DYRBARASTE DU HAR</StyledHeading>
          <p>Vi gör det mycket krångligare än det behöver vara. Många tar hand om sin käraste ägodel (som borde vara kroppen) men sannolikt är en bil eller klocka, mycket bättre än sin kropp. Vi lämnar in dyra ägodelar på reparation, investerar i dyr service, putsar och polerar, dammsuger den ren med jämna mellanrum och betalar massor med pengar för denna pryl ska hålla så länge som möjligt. Kroppen däremot, det absolut viktigaste vi har, det enda som egentligen spelar någon roll, tar vi för givet. Den får ofta minimalt med vila, ingen dyr service och den körs ständigt på högvarv, med FEL bränsle, dessutom. Det är slitsamt för den, och vi kan inte förvänta oss annat än skador, sjukdomar, utbytta höfter och knän och att vi långsamt blir svagare tidigare än vi hoppats och behövt bli. Vänta! Det går att börja nu! Det är inte försent att börja om och stötta kroppen i dennes tappra försök att bära dig framåt i livet med styrka och smidighet, energi och glädje. Just show some respect, kort och gott!
          </p>

        </InnerWrapper>
        <StyledSwiperDiv>
          <SwiperIntro />
        </StyledSwiperDiv>
      </OuterWrapper>
      <Footer />
    </>
  )
};

export default Home;

export const StyledSwiperDiv = styled.div`
width: 70vw;
`

/* export const Box = styled.div`
width: 70vw;
padding: 30px;
border: 1px solid grey;
margin: 10px;
` */

