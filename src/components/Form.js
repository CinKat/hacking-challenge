import styled from "@emotion/styled";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import { validationForm } from "../helpers/validationForm";
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
  const { filter, currentUser } = useAuth();
  const [dataForm, setForm] = useState({
    dni: "",
    celular: "",
    placa: "",
    terminos: false,
  });
  const [errors, setErrors] = useState({})

  function handleFormChange(event) {
    const { type, name, value, id, checked } = event.target;
    if (type === "text") {
      setForm({ ...dataForm, [name]: value });
    }
    if (type === "checkbox") {
      setForm({ ...dataForm, [id]: checked })
    }
  }

  function handleBlur(event) {
    handleFormChange(event);
    setErrors(validationForm(dataForm))
  }


  function handleSubmit(event) {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      filter(dataForm);
    } else {
      return;
    }
  }

  console.log(dataForm)

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <FormTitle>Dejanos tus datos</FormTitle>
        <InputWrapper>
          <Selects
            placeholder="Nro de doc"
            id="dni"
            value={dataForm.dni}
            onChange={handleFormChange}
            onBlur={handleBlur}
            error={errors.dni}
          />
          <Input
            border
            placeholder="Celular"
            id="celular"
            value={dataForm.celular}
            onChange={handleFormChange}
            onBlur={handleBlur}
            error={errors.celular}
          />
          <Input
            border
            placeholder="Placa"
            id="placa"
            value={dataForm.placa}
            onChange={handleFormChange}
            onBlur={handleBlur}
            error={errors.placa}
          />
        </InputWrapper>
        <Checkbox
          label="Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones."
          id="terminos"
          checked={dataForm.terminos}
          onChange={handleFormChange}
          onBlur={handleBlur}
          error={errors.terminos}
        />
        <CustomButton isFullWidth>Cotízalo</CustomButton>
      </StyledForm>
    </>
  )
}

export default Form;