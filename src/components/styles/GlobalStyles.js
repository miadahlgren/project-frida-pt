import styled from 'styled-components/macro';

export const OuterWrapper = styled.section`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const InnerWrapper = styled.section`
width: 90vw;
min-height: 60vh;
margin: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
@media (min-width: 1024px) {
  max-width: 50vw;
}
`
export const StyledCatchPhrase = styled.h1`
font-family: 'Marcellus', serif;
color: #FFFFFF;
font-size: 2em;
font-weight: 300;
padding: .5em 0;
text-align: center;
@media (min-width: 667px) {
  font-size: 2em;
  }
`

export const StyledHeading = styled.h2`
font-family: 'Cormorant Garamond', serif;
color: var(--color-darkBlack);
font-size: 20px;
font-weight: 400;
text-align: center;
@media (min-width: 667px) and (max-width: 1024px) {
    font-size: 20px;
}
@media (min-width: 1024px) {
    font-size: 25px;
}
`

export const StyledSubHeading = styled.h3`
  font-family: 'Lato', sans-serif;
  color: grey;
  font-size: .5em;
  letter-spacing: .4em;
  text-transform: uppercase;
  text-align: center;
  margin: 1em 0 .5em 0;
  @media (min-width: 667px) {
  font-size: 0.9em;
  }
`

export const StyledButton = styled.button`
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  line-height: 2em;
  letter-spacing: 3px;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid var(--color-darkBlack);
  padding: 0 4em;
  margin: 1em 0;
  color: var(--color-darkBlack);
  cursor: pointer;
  @media (min-width: 1024px) {
    :hover {
      background: var(--color-darkBlack);
      color: #fff;
    }
  }
`
export const StyledFormInput = styled.input`
  border: 1px solid var(--color-softBlack);
  width: 80%;
  color: var(--color-softBlack);
  padding: 1em;
  margin-bottom: 20px;
  font-family: inherit;
  font-weight: 300;
  font-size: 1em;
`
export const StyledFormSelect = styled.select`
  border: 1px solid var(--color-softBlack);
  width: 80%;
  color: var(--color-softBlack);
  padding: 1em;
  margin-bottom: 20px;
  font-family: inherit;
  font-weight: 300;
  font-size: 1em;
`
export const StyledRadioContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 1em;
`
export const StyledRadioButton = styled.input`
filter: grayscale(1);
margin: 0 .8em;
`