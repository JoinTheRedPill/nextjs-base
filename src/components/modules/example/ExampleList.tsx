import { Example } from "@models";
import ExampleItem from "./ExampleItem";

interface ExampleListProps {
  items: Example[];
}

const ExampleList = ({ items }: ExampleListProps) => (
  <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
    {items.map((item) => (
      <ExampleItem key={item.id} item={item} />
    ))}
  </div>
);

export default ExampleList;
