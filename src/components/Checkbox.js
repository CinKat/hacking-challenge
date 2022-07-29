import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { fonts, typography } from "../styles/typography";

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

function Checkbox({ id, name, label, ...rest }) {
  return (
    <Container>
      <SytledCheckbox type="checkbox" id={id || name} name={name} {...rest} />
      <label htmlFor={id || name}>{label || name}</label>
    </Container>
  );
}

export default Checkbox;