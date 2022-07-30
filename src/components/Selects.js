import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import Chevrot from "../assets/icons/chevrot.svg";
import Input, { Error } from "./Input";

function Selects({
  id,
  name,
  error,
  placeholder,
  ...rest
}) {
  return (
    <SelectWrapper>
      <Select>
        <SelectInput>
          <option value="">DNI</option>
          <option value="1">Pasaporte</option>
          <option value="2">DNI</option>
        </SelectInput>
        <Input
          placeholder={placeholder}
          id={id}
          name={name}
          {...rest}
          size="13"
        />
      </Select>
      {error && <Error size="sm">{error}</Error>}
    </SelectWrapper>
  )
}

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap:0.5rem;
`


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