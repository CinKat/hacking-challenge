import styled from "@emotion/styled";

const IconStyled = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`

function Icon({ icon, ...props }) {

  return (
    <>
      <IconStyled src={icon} {...props} />
    </>
  )
}

export default Icon;