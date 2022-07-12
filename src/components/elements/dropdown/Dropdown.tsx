interface DropdownProps {
  children: React.ReactNode;
  onChange: (value: any) => void;
}

const Dropdown = ({ children, onChange }: DropdownProps) => {
  return (
    <div className="bg-theme-base-600 border border-theme-base-700 px-2 py-1 cursor-pointer">
      <select
        onChange={onChange}
        className="bg-transparent w-full focus:outline-none"
      >
        {children}
      </select>
    </div>
  );
};

export default Dropdown;
