import { RecoilRoot } from "recoil";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <ThemeProvider
        attribute="class"
        themes={["light", "dark"]}
        enableSystem={false}
        defaultTheme="light"
      >
        {children}
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default Providers;
