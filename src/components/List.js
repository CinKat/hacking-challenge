import styled from "@emotion/styled";
import { colors } from "../styles/colors";
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
      <h2>{priceTotal}</h2>
    </WrapperList>
  )
}

export default List;