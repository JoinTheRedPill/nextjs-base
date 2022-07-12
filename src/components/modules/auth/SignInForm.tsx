import { useState } from "react";
import { useTranslation } from "next-i18next";

import {
  Button,
  Form,
  FormControl,
  FormInput,
} from "@jointheredpill/react-component-library";

const descriptions: any = {
  OAuthAccountNotLinked: "error.OAuthAccountNotLinked",
  EmailSignin: "error.EmailSignin",
  AccessDenied: "error.AccessDenied",
  EmailSent: "error.EmailSent",
  Callback: "error.Callback",
  Default: "error.Default",
  EmailRequired: "error.EmailRequired",
};

const buttonTypeByProvider: any = {
  discord: "accent",
  google: "danger",
  default: "neutral",
};

const buttonIconByProvider: any = {
  discord: "pi pi-discord",
  google: "pi pi-google",
  default: "pi pi-twitter",
};

interface SignInFormProps {
  csrfToken: string | null;
  error: any;
  onProviderClick: (provider: any) => void;
  providers: { id: string; name: string }[];
  type: any;
}

const SignInForm = ({
  csrfToken,
  error,
  onProviderClick,
  providers = [],
  type,
}: SignInFormProps) => {
  const { t } = useTranslation("signin");

  const [message, setMessage] = useState(
    Array.isArray(error) ? error.slice(-1).pop() : error
  );

  return (
    <div className="w-full">
      <p className="text-center mb-6 text-sm">{t<string>("email-title")}</p>
      <div className="space-y-2">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            {provider.name === "Email" ? (
              <Form method="post" action="/api/auth/signin/email">
                <FormInput name="csrfToken" type="hidden" value={csrfToken} />
                <FormControl>
                  <FormInput
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t<string>("email-placeholder")}
                    required
                  />
                </FormControl>
                <FormControl>
                  <Button type="primary" block submit={true}>
                    {t<string>("btn-submit")}
                  </Button>
                </FormControl>
                <p className="text-center my-6 text-sm">
                  {t<string>("providers-title")}
                </p>
              </Form>
            ) : (
              <Button
                type={
                  buttonTypeByProvider[provider.name.toLowerCase()] ??
                  buttonTypeByProvider.default
                }
                icon={
                  buttonIconByProvider[provider.name.toLowerCase()] ??
                  buttonIconByProvider.default
                }
                block
                onClick={() => onProviderClick(provider)}
              >
                {`${t<string>("continue-with")} ${provider.name.replace(
                  " (Legacy)",
                  ""
                )}`}
              </Button>
            )}
          </div>
        ))}
      </div>

      {message && (
        <div
          className={`${
            type && type?.indexOf("success") >= 0
              ? "bg-theme-success text-black"
              : "bg-theme-error text-white"
          } px-4 py-2 shadow mt-6 flex items-start justify-center space-x-2`}
        >
          <div className="flex-grow">
            {descriptions.hasOwnProperty(message)
              ? t<string>(descriptions[message])
              : t<string>(descriptions["Default"])}
          </div>
          <button
            onClick={() => {
              setMessage(null as any);
            }}
          >
            <i className="pi pi-times text-sm" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SignInForm;
