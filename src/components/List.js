import { Paragraph } from "./Hero";
import { Text } from "./ShowData";

function List({ options }) {
  console.log(options)
  const list = options[0].options;

  return (
    <section>

      {list.map((item) => (
        <div>
          <Text>{item.name}</Text>
          <Paragraph>{item.description}</Paragraph>
        </div>
      ))}
    </section>
  )
}

export default List;