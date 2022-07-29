import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: ${colors.red[500]};
  color: ${colors.white};
  border: none;
  ${typography.button.button_14};
  cursor: pointer;
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "fit-content")};
  padding: 1.25rem 2rem;
  border-radius: 0.5rem;
  text-transform: uppercase;

  /* &:hover {
    background-color: ${colors.gray[300]};
  }
  &:active {
    background-color: ${colors.gray[400]};
  }
  &:focus {
    outline: 2px solid ${colors.gray[400]};
  }
  &:disabled {
    opacity: 60%;
    cursor: not-allowed;
  } */
`;

function Button({ ...props }) {
  return (
    <StyledButton {...props} />
  );
}

export default Button;