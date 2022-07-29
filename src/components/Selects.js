import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import Chevrot from "../assets/icons/chevrot.svg";
import Input from "./Input";

function Selects() {
  return (

    <Select>
      <SelectInput>
        <option value="">DNI</option>
        <option value="1">DNI</option>
        <option value="2">DNI</option>
      </SelectInput>
      <Input placeholder="Nro de doc" id="numero" size="13" />
    </Select>
  )
}


const Select = styled.div`
  display: flex;
  border: 0.06rem solid ${colors.gray[500]};
  border-radius: 0.25rem;
`

const SelectInput = styled.select`
  border: none;
  border-right: 0.06rem solid ${colors.gray[500]};
  padding: 0.93rem;
  display: flex;
  align-items: center;
  background-color: white;
  width: fit-content;
  appearance: none;
  padding-right: 2.25rem;
  background-image: url(${Chevrot});
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: calc(100% - 0.75rem);
`

export default Selects;