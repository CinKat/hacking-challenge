import styled from "@emotion/styled";
import Count from "../components/Count";
import ShowData from "../components/ShowData";
import { useAuth } from "../context/auth-context";

function ShowPlan() {
  const { currentUser } = useAuth();
  console.log(currentUser)

  return (
    <>
      <ShowData user={currentUser} />
      <Container>
        <Count />
      </Container>
    </>


  )
}

const Container = styled.div`
  margin: 2.75rem 2rem 0;
`

export default ShowPlan;