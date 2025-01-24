const Input = ({ id, label, type, onChange, value, checked }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor={id}>{label}</label>
        <input style={{borderRadius:"8px"}}
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(id, e)}
          checked={checked}
          required
        />
      </div>
    </>
  );
};

export default Input;
