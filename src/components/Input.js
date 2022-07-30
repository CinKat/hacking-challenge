import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const Label = styled.label`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${colors.gray[300]};
`;

const StyledInput = styled.input`
  padding: 1rem 1rem;
  border: ${(rest) => (rest.border ? `0.06rem solid ${colors.gray[500]}` : 'none')};
  border-radius: 0.25rem;
  background-color: white;
  color: ${colors.gray[300]};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.gray[50]};
    ${typography.title.regular_16};
    width: fit-content;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Error = styled.p`
  color: ${colors.red[500]};
  padding-left: 1rem;
`;

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  error,
  size,
  ...rest
}) {
  name ||= id;

  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        size={size}
        {...rest}
      />
      {error && <Error>{error}</Error>}
    </InputContainer>
  );
}

export default Input;