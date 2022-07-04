import { useTheme } from "@hooks";

const ThemeSelector = () => {
  const { theme, setTheme, mounted, isDark } = useTheme();
  if (!mounted) return null;

  const handleThemeChange = (ev: any) => {
    const newTheme = ev.target.value;
    setTheme(newTheme);
  };

  return (
    <select onChange={handleThemeChange}>
      <option value="light">🌞 Light</option> {/* Default */}
      <option value="dark" selected={isDark}>
        🌚 Dark
      </option>
    </select>
  );
};

export default ThemeSelector;
