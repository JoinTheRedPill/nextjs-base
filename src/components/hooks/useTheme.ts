import { useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";

const useTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useNextTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  return { isDark, mounted, theme, setTheme };
};

export default useTheme;
