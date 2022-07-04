import { ThemeSelector } from "@modules";
import { ExampleList } from "@states";

const HomeTemplate = () => {
  return (
    <div>
      <main className="space-y-8">
        <h1 className="bg-theme-brand text-theme-brand-content text-xl font-bold px-2 py-1">
          Welcome to Next.js - Base project!
        </h1>
        <p className="space-x-2">
          <span>Theme:</span> <ThemeSelector />
        </p>
        <ExampleList />
      </main>
    </div>
  );
};

export default HomeTemplate;
