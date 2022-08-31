import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";
import Button from "./Button";
import { Paragraph } from "./Hero";
import Show from "./Show";
import { Text } from "./ShowData";
import Switch from "./Switch";


const WrapperList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
`
const ContainerGrid = styled.div`
  display: grid;
  grid-template-areas: "img title option"
                       ". main main"
                       ". footer .";

  grid-template-columns: 40px auto 50px;
  column-gap: 18px;
  border-bottom: 2px solid ${colors.gray[600]};
  &:first-of-type {
    grid-area: img;
  }
  h4 {
    grid-area: title;
  }
  label {
    grid-area: option;
  }
  article {
    grid-area: main;
    padding-top: 12px;

  }
  button {
    grid-area: footer;
  }
`
const ContainerPrice = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 6rem 0 1rem 1rem;
`
const Number = styled.section`
  ${typography.title.m_regular_24};
  letter-spacing: -0.2px;
  color: ${colors.gray[300]};
`
const TextSmall = styled.p`
  ${typography.title.bold_10};
  letter-spacing: 0.8px;
  text-transform: uppercase;
`

function List({ plan, count, onChangePlan }) {
  const priceTotal = calculatePrice();
  function calculatePrice() {
    let total = 0;
    plan.options.forEach(element => {
      if (element.checked) {
        total += element.price;
      }
    });

    return total;
  }

  function showText(item) {
    item.show = !item.show;
    onChangePlan(plan)

  }

  function onToggled(item) {
    item.checked = !item.checked
    onChangePlan(plan)
  }

  return (
    <WrapperList>
      {plan.options.map((item) => (
        <ContainerGrid key={item.name}>
          {item.image}
          <Text>{item.name}</Text>
          <Switch onChange={() => { onToggled(item) }} name={item.name} toggled={item.checked} disabled={count > 16000 && item.name === "Choque y/o pasarte la luz roja"} />
          <article>
            {
              item.show && <Paragraph>{item.description}</Paragraph>
            }
          </article>
          <Show onClick={() => { showText(item) }} show={item.show} />
        </ContainerGrid>
      ))}
      <ContainerPrice>
        <div>
          <Number>{`$${priceTotal}.00`}</Number>
          <TextSmall>Mensual</TextSmall>
        </div>
        <Button>Lo quiero</Button>
      </ContainerPrice>
    </WrapperList>
  )
}

export default List;