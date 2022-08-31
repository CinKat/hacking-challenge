import styled from "@emotion/styled";
import Form from "../components/Form";
import Hero from "../components/Hero";
import { colors } from "../styles/colors";
import Background from "../assets/img/background.png";


const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
    gap: 2rem;
  }
`
const Container = styled.div`
  background-color:${colors.gray[400]};
  height:19.2rem;
  @media (min-width: 600px) {
    background-image:url(${Background});
    background-repeat: no-repeat;
    background-size: 600px;
    height:100vh;
  }
`

function Home() {
  return (
    <LoginWrapper>
      <Container>
        <Hero />
      </Container>
      <Form />
    </LoginWrapper>
  )
}

export default Home;