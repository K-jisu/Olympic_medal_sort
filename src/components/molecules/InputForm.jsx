import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const InputForm = () => {
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "row" }}
    >
      <Input
        id={"country"}
        label={"국가명"}
        type={"text"}
        handler={handleInputChange}
      />
      <Input
        id={"gold"}
        label={"금메달"}
        type={"number"}
        handler={handleInputChange}
      />
      <Input
        id={"silver"}
        label={"은메달"}
        type={"number"}
        handler={handleInputChange}
      />
      <Input
        id={"bronze"}
        label={"동메달"}
        type={"number"}
        handler={handleInputChange}
      />
      <Button></Button>
    </form>
  );
};

export default InputForm;
