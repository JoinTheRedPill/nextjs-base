import { Card } from "@elements";
import { Example } from "@models";

interface ExampleItemProps {
  item: Example;
}

const ExampleItem = ({ item }: ExampleItemProps) => (
  <Card title={`ID: ${item.id}`}>
    <p>{item.name}</p>
  </Card>
);

export default ExampleItem;
