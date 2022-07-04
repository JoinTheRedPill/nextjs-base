import { Session } from "models";
import { useEffect, useState } from "react";

const useSession = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    fetchSession();
  }, []);

  const fetchSession = () => {
    // TODO. Load session
    const dummySession = {
      user: {
        name: "John Doe",
        email: "john.doe@example.com",
      },
      token: "1234567890",
    };
    setSession(dummySession);
  };

  return {
    session,
  };
};
export default useSession;
