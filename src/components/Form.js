import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Input from "./Input";
import Selects from "./Selects";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 18.5rem;
  padding: 2.5rem 2rem 3.37rem 2rem;
  gap: 1.5rem;
  @media (min-width: 600px) {
    max-width: 18rem;
    display: flex;
    padding: 3rem 4rem 3rem 0;
    margin-left: auto;
    margin-right: auto; 
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
`
const FormTitle = styled.h3`
  ${typography.title.m_regular_24};
  letter-spacing: -0.2px;
  color: ${colors.gray[300]};
`
const CustomButton = styled(Button)`
  @media (min-width: 600px) {
    width: fit-content;
  }
`
function Form() {
  return (
    <>
      <StyledForm >
        <FormTitle>Dejanos tus datos</FormTitle>
        <InputWrapper>
          <Selects />
          <Input
            border
            placeholder="Celular"
            id="celular"
          />
          <Input
            border
            placeholder="Placa"
            id="placa"
          />
        </InputWrapper>
        <Checkbox
          label="Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones."
        />
        <CustomButton isFullWidth>Cotízalo</CustomButton>
      </StyledForm>
    </>
  )
}

export default Form;