import styled from "@emotion/styled";
import { useState } from "react";
import Count from "../components/Count";
import { Paragraph, TextBold } from "../components/Hero";
import ShowData, { Text } from "../components/ShowData";
import ShowHidenPlan from "../components/ShowHidenPlan";
import { useAuth } from "../context/auth-context";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const Container = styled.div`
  margin: 2.75rem 2rem 0;
`
const Title = styled.h2`
  ${typography.title.regular_20};
  color: ${colors.gray[300]};
`

function ShowPlan() {
  const { currentUser } = useAuth();



  return (
    <>
      <ShowData user={currentUser} />
      <Container>
        <Count />
        <Title>Agrega o quita coberturas</Title>
        <ShowHidenPlan />
        {/* <TextBold>Protege a tu auto</TextBold>
        <TextBold>Protege a los que te rodean</TextBold>
        <TextBold>Mejora tu plan</TextBold> */}

        {/* <div>
          <img />
          <Text>Llanta robada</Text>
          <Paragraph>
            He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
          </Paragraph>
          <span>Ver menos</span>
        </div> */}
      </Container>
    </>


  )
}

export default ShowPlan;