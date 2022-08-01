import styled from "@emotion/styled";
import ImgMobile from "../assets/img/img-mobile.png"
import { colors } from "../styles/colors";
import { fonts, typography } from "../styles/typography";
import ImgDesktop from "../assets/img/img-desktop.png";

const MainImage = styled.div`
  background-image:url(${ImgMobile});
  background-repeat: no-repeat;
  background-position: right -0.125rem;
  height: 25rem;
  min-width: 35%;
  @media (min-width: 600px) {
    background-image:url(${ImgDesktop});
    background-position: center center;
    width: 320px;
    height: 250px;
  }
`
const HeroWrap = styled.section`
  padding: 0 0 0 2rem;
  display: flex;
  gap: 1rem;
  @media (min-width: 600px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 1.5em;
    padding: 2rem 4rem;
  }
`
export const TextBold = styled.p`
  ${typography.title.bold_10};
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-weight: 700;
  color: ${colors.gray[300]};
  padding-top: 2.6rem;
  @media (min-width: 600px) {
    padding-top: 0;
    ${typography.button.button_12};
  }
`
export const Title = styled.h2`
  ${typography.title.m_regular_28};
  letter-spacing: -0.03rem;
  color: ${colors.gray[300]};
  @media (min-width: 600px) {
    padding-top: 0;
    ${typography.title.d_regular_36};
  }
`
const StyledTitle = styled(Title)`
  color: ${colors.red[500]};
`
export const Paragraph = styled.p`
  font-family: ${fonts.secondary};
  ${typography.paragraph.regular_14};
  color: ${colors.gray[200]};
`
function Hero() {
  return (
    <HeroWrap>
      <div>
        <TextBold>¡Nuevo!</TextBold>
        <div>
          <Title>Seguro Vehicular</Title>
          <StyledTitle>Tracking</StyledTitle>
        </div>
        <Paragraph>Cuentanos donde le haras seguimiento a tu seguro</Paragraph>
      </div>
      <MainImage />
    </HeroWrap>
  )
}

export default Hero;