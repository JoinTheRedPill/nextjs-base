import { getCsrfToken, getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { SignInFormUI } from "@modules/auth";

const SignInForm = () => {
  const router = useRouter();
  const { error, type, callbackUrl } = router.query;

  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [providers, setProviders] = useState<any>([]);

  useEffect(() => {
    initNextAuth();
  }, []);

  const initNextAuth = async () => {
    const csrfToken = await getCsrfToken();
    setCsrfToken(csrfToken ?? null);

    const providers = await getProviders();
    setProviders(providers);
  };

  if (!csrfToken || !providers) {
    return null;
  }

  return (
    <SignInFormUI
      error={error}
      type={type}
      csrfToken={csrfToken}
      providers={providers}
      onProviderClick={(provider: any) => {
        signIn(provider.id, { callbackUrl: `${callbackUrl}` });
      }}
    />
  );
};

export default SignInForm;
