import styled from "@emotion/styled";
import { useState } from "react";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";
import { Text } from "./ShowData";

const add = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 3V13" stroke="#6F7DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M13 8L3 8" stroke="#6F7DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const remove = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 8L3 8" stroke="#939DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const Range = styled.p`
  ${typography.button.button_12};
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color:${colors.gray[200]};
  padding-bottom: 1rem;
`
const CustomButton = styled.button`
  background-color: transparent;
  border: none;
`
const StyleCount = styled.div`
  display: flex;
  gap: 4rem;
  border: 1px solid ${colors.gray[500]};
  padding: 1rem 1rem;
  /* width: fit-content; */
`

function Count() {
  const [count, setCount] = useState(12500);
  function increment() {
    if (count < 16500) {
      setCount(count + 100)
    }
  }

  function decrement() {
    if (count > 12500) {
      setCount(count - 100)
    }
  }

  return (
    <>
      <>
        <Text>Indica la suma asegurada</Text>
        <Range>Min $12.500 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Max $16.500</Range>
      </>
      <StyleCount>
        <CustomButton onClick={decrement}>{remove}</CustomButton>
        <Text>{`$ ${count / 1000}00`}</Text>
        <CustomButton onClick={increment}>{add}</CustomButton>
      </StyleCount>
    </>

  )
}

export default Count;