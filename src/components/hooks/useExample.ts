import { useEffect, useState } from "react";

import { Example } from "@models";
import { listExamples } from "@repositories/example.repository";

const useExample = () => {
  const [examples, setExamples] = useState<Example[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!loading) {
      fetchExamples();
    }
  }, []);

  const fetchExamples = async () => {
    setLoading(true);
    try {
      const response: Example[] = await listExamples();
      setExamples(response);
    } catch (error) {
      console.log("error", error);
    }
    setLoading(false);
  };

  return {
    examples,
    loading,
  };
};

export default useExample;
