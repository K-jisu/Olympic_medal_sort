const Input = ({ id, label, type, handler, value }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="id">{label}</label>
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => handler(id, e)}
        />
      </div>
    </>
  );
};

export default Input;
