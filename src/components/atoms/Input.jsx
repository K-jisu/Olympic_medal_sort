const Input = ({ id, label, type, handler }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="id">{label}</label>
        <input
          id={id}
          type={type}
          onChange={(e) => handler("country", e.target.value)}
        />
      </div>
    </>
  );
};

export default Input;
