import { useExample } from "@hooks";
import { ExampleListUI } from "@modules";

const ExampleList = () => {
  const { examples, loading } = useExample();

  if (loading) {
    return <div>Loading...</div>;
  }

  return <ExampleListUI items={examples} />;
};

export default ExampleList;
