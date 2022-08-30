import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../styles/colors";

const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 3.18rem;
  height: 1.93rem;

`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;

  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 1.125rem;
  
  background-color: ${colors.gray[600]};

  &:before {
    position: absolute;
    content: "";
    height: 1.75rem;
    width: 1.75rem;
    left: 1.5px;
    bottom: 1.5px;
    border-radius: 50%;
    background-color: ${colors.white};
    box-shadow: 0px 2px 2px rgba(97, 173, 116, 0.6), 0px 2px 1px rgba(84, 121, 94, 0.06);
  }
`

const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${colors.green[100]};
    &:before {
      transform: translateX(20px);
    }
  }
`

function Switch({ onChange, toggled, disabled }) {
  console.log(disabled)
  return (
    <StyledSwitch>
      <Checkbox type='checkbox' onChange={onChange} checked={toggled} disabled={disabled} />
      <Slider />
    </StyledSwitch>
  )
}

export default Switch;