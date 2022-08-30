import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";
import { CustomButton } from "./Count";
import List from "./List";



const WrapperButton = styled.div`
  display: flex;
`
const StyleButton = styled(CustomButton)`
  color: ${colors.gray[300]};
  font-weight: 700;
  ${typography.title.bold_10}
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding-bottom: 1.5rem;
  cursor: pointer;
  &:focus {
    color: ${colors.red[500]};
    border-bottom: 2px solid ${colors.red[500]};
  }
  &:active {
    color: ${colors.red[500]};
  }
`
function ShowHidenPlan({ count, planes, onChangePlan }) {
  const [cobertura, setCobertura] = useState('Protege tu auto');
  let currentPlan = planes.find((item) => item.name === cobertura);

  if (count > 16000 && currentPlan.name === "Protege tu auto") {
    const opcion = currentPlan.options.find((item) => item.name === "Choque y/o pasarte la luz roja");
    opcion.checked = false;
  }


  return (
    <div>
      <WrapperButton>
        {planes.map((plan) => (
          <StyleButton
            key={plan.name}
            onClick={() => setCobertura(plan.name)}
          >
            {plan.name}
          </StyleButton>
        ))}
      </WrapperButton>
      <List plan={currentPlan} count={count} onChangePlan={onChangePlan} />
    </div>
  )
}

export default ShowHidenPlan;