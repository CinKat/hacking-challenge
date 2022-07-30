import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { fonts, typography } from "../styles/typography";
import { Error } from "./Input";

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  font-family: ${fonts.secondary};
  ${typography.paragraph.regular_12}
`;

const SytledCheckbox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  accent-color: ${colors.green[50]};
  &:checked {
    background-color: ${colors.green[50]};
  }
`;

const Link = styled.a`
  font-family: ${fonts.secondary};
  ${typography.paragraph.regular_12};
  font-weight: 400;
  letter-spacing: 0.2px;
  color: #676F8F;
`

function Checkbox({ id, name, label, error, ...rest }) {
  return (
    <>
      <Container>
        <SytledCheckbox type="checkbox" id={id || name} name={name} {...rest} />
        <label htmlFor={id || name}>
          Acepto <Link href="#">Políticas de Protección de Datos Personales</Link>
          y los <Link href="#">Términos y Condiciones</Link></label>

      </Container>
      {error && <Error size="sm">{error}</Error>}
    </>

  );
}

export default Checkbox;