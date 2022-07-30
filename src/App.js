import styled from "@emotion/styled";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { colors } from "./styles/colors";
import Background from "./assets/img/background.png";
import Form from "./components/Form";

function App() {

  return (
    <>
      <Header />
      <LoginWrapper>
        <Container>
          <Hero />
        </Container>
        <Form />
      </LoginWrapper>
    </>
  );
}

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
  /* width: 100%; */
  @media (min-width: 600px) {
    background-image:url(${Background});
    background-repeat: no-repeat;
    height:100vh;
  }
`

export default App;
