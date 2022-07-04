import { ThemeSelector } from "@modules";
import { ExampleList } from "@states";
import { Title } from "@jointheredpill/react-component-library";

const HomeTemplate = () => {
  return (
    <div>
      <main className="space-y-8">
        <Title className="bg-theme-brand text-theme-brand-content text-xl font-bold px-2 py-1">
          Welcome to Next.js - Base project!
        </Title>
        <p className="space-x-2">
          <span>Theme:</span> <ThemeSelector />
        </p>
        <ExampleList />
      </main>
    </div>
  );
};

export default HomeTemplate;
