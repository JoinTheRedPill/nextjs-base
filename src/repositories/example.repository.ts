import { Example } from "@models";
import { sleep } from "@utils";

export const listExamples = async (): Promise<Example[]> => {
  await sleep(1000);
  return [
    {
      id: 1,
      name: "Example 1",
    },
    {
      id: 2,
      name: "Example 2",
    },
    {
      id: 3,
      name: "Example 3",
    },
    {
      id: 4,
      name: "Example 4",
    },
  ];
};
