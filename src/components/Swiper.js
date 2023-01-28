/* eslint-disable max-len */
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components/macro';
import { Pagination, Navigation } from 'swiper';
import why from '../bilder_pt/why.jpg';
import man from '../bilder_pt/man.jpg';
import shift from '../bilder_pt/shift_quote.jpg';
import avocado2 from '../bilder_pt/avocado2.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles/swiper.style.css';
import { StyledHeading, StyledSubHeading } from './styles/GlobalStyles';

const SwiperIntro = () => {
  return (
    <><StyledHeading>DET ÄR INTE SVÅRARE ÄN SÅHÄR</StyledHeading>
      <Swiper
        slidesPerView="1"
        spaceBetween={20}
        loop
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <SlideTextContainer>
            <StyledSubHeading>1. TA INTE KROPPEN FÖR GIVEN</StyledSubHeading>
            <p>Sluta att ta din kropp, ditt tempel, allt du har och är, för givet. Det är aldrig försent att vända din hälsoutveckling, det krävs bara lite mer kunskap och olika strategier. Allt är möjligt – det tar bara olika lång tid beroende på hur pass länge och hur pass hårt du kört din kropp på högvarv med fel bränsle. Låt oss börja med att tanka rätt bränsle, sedan adderar vi lite service, polering och extra kärlek till denna dyrbara pryl? Pö om pö, lugnt och kontrollerat bygger vi upp den igen.</p>
          </SlideTextContainer>
          <img src={man} alt="this is keto" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideTextContainer>
            <StyledSubHeading>2. BÖRJA IDAG</StyledSubHeading>
            <p>Börjar du inte nu så sakteliga känna och förstå att det faktiskt är möjligt att ta ett omtag och börja bygga en starkare kropp med mer muskler och energi? En kropp som kommer få dig att röra dig lättare och ledigare med mer energi genom vardagen?</p>
          </SlideTextContainer>
          <img src={shift} alt="this is the sign" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideTextContainer>
            <StyledSubHeading>3. ENKLA MEDEL</StyledSubHeading>
            <p>Jag vet, att du med hjälp av mig och hyfsat enkla medel och en portion viljestyrka kan uppnå resultat för din hälsa som du inte trodde vad möjligt.
            </p>
          </SlideTextContainer>
          <img src={why} alt="this is avocado" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideTextContainer>
            <StyledSubHeading>4. BRA BRÄNSLE</StyledSubHeading>
            <p>Egentligen är inte hälsa svårare än att du ska undvika dåligt bränsle och ösa på med gott bränsle. Du ska också röra lite mer på dig än vad du sannolikt gör idag. Gör du detta under tre månader initialt kommer du känna en sådan skillnad att du aldrig mer kommer att kunna återgå till ”ta- kroppen-för-givet-läget”, och så rullar det på. Du kommer efter tre månader att hysa en sådan respekt och glädje över din kropp att livsstilen fortsättningsvis infinner sig självt, du kommer vilja tanka rätt bränsle och ge kroppen vad den är skapt för – lite mer vardagsmotion.
            </p>
          </SlideTextContainer>
          <img src={avocado2} alt="this is avocado" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperIntro

const SlideTextContainer = styled.div`
padding: .8em;
width: 70vw;
overflow: scroll;
& p {
    margin-top: .4em;
}
@media (min-width: 667px) {
padding: 3.5em;
}
`