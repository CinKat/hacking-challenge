import { colors } from "../styles/colors";
import styled from "@emotion/styled";
import { typography } from "../styles/typography";

const chevrot = <svg width="9" height="13" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M10.2943 1.23418C10.6148 1.56556 10.6148 2.097 10.2943 2.42837L6.09867 6.76598C5.76988 7.10589 5.23001 7.10589 4.90122 6.76598L0.705619 2.42837C0.385092 2.097 0.385092 1.56556 0.705619 1.23418C1.03441 0.894269 1.57428 0.894269 1.90307 1.23418L5.49995 4.9528L9.09682 1.23418C9.42561 0.894269 9.96549 0.894269 10.2943 1.23418Z" fill="currentColor" />
</svg>;

const WrapperButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  ${typography.title.bold_10};
  background-color: transparent;
  border: none;
  padding: ${({ show }) => (show ? "12px 0 24px 0" : "0 0 24px 0")};
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "fit-content")};
  color: ${({ show }) => (show ? `${colors.gray[50]}` : `${colors.blueberry[100]}`)};
`;

const CustomIcon = styled.div`
  display: flex;
  align-items: center;
  transform: ${({ show }) => (show ? "rotate(180deg)" : "")};
`

function Show({ onClick, ...props }) {
  return (
    <WrapperButton {...props} onClick={onClick}>
      <p>{props.show ? "ver menos" : "ver más"}</p>
      <CustomIcon show={props.show}>{chevrot}</CustomIcon>
    </WrapperButton>
  )
}

export default Show;