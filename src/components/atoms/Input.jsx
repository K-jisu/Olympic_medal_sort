const Input = ({ id, label, type, onChange, value, checked }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(id, e)}
          checked={checked}
        />
      </div>
    </>
  );
};

export default Input;
