import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { fonts, typography } from "../styles/typography";
import { Title } from "./Hero";
import Person from "../assets/img/img-person.png";

const Subtitle = styled.p`
  font-family: ${fonts.secondary};
  ${typography.paragraph.regular_16};
  color: ${colors.gray[200]};
`
export const Text = styled.h4`
  ${typography.title.regular_16};
  color: ${colors.gray[300]};
  letter-spacing: 0.2px;
  font-weight: normal;
`
const StyleSubtitle = styled(Subtitle)`
  ${typography.paragraph.regular_12};
  letter-spacing: 0.2px;
  color: ${colors.gray[50]};
`
const Card = styled.div`
  background-color: ${colors.white};
  border-radius: 12px;
  display: flex;
  /* justify-content: space-between; */
  padding: 0 1rem 0 1.5rem;
  margin: 1.5rem 2rem 2rem 1.5rem;
  position:relative;
  z-index:0;
  /* display: flex; */
`
const Wrapper = styled.div`
  background-color: ${colors.gray[400]};
  padding: 2.5rem 0 1.5rem;
  /* background-image: url(${Person});
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 5rem 9.75rem; */
`
const Texts = styled.div`
  margin: 0 2rem;
`
const Image = styled.div`
  background-image: url(${Person});
  background-repeat: no-repeat;
  background-position: right 0;
  /* background-size: 5rem 9rem; */
  height: 160px;
  width: 100%;
  top: -0.6rem;
  right: 0.5rem;
  position: absolute;
  z-index: 2;
`
const ContainerText = styled.div`
  padding: 2.7rem 0 2.25rem;
  position: relative;
  z-index: 1;
`

function ShowData({ user }) {

  return (
    <Wrapper>
      <Texts>
        <Title>Mira las coberturas</Title>
        <Subtitle>Conoce las coberturas para tu plan</Subtitle>
      </Texts>
      <Card>
        <ContainerText>
          {user.map((item) => (
            <StyleSubtitle key={item.name}>Placa: {item.placa}</StyleSubtitle>
          ))}
          <Text>Wolkswagen 2019</Text>
          <Text>Golf</Text>
        </ContainerText>
        <Image />
      </Card>
    </Wrapper>
  )
}

export default ShowData;