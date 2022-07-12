import { Dropdown } from "@elements";
import { useTheme } from "@hooks";

const ThemeSelector = () => {
  const { setTheme, mounted, isDark } = useTheme();
  if (!mounted) return null;

  const handleThemeChange = (ev: any) => {
    const newTheme = ev.target.value;
    setTheme(newTheme);
  };

  return (
    <Dropdown onChange={handleThemeChange}>
      <option value="light">🌞 Light</option> {/* Default */}
      <option value="dark" selected={isDark}>
        🌚 Dark
      </option>
    </Dropdown>
  );
};

export default ThemeSelector;
