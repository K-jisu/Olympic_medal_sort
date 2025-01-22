import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const InputForm = ({ handleInputChange, handleSubmit, data }) => {
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "row" }}
    >
      <Input
        id={"country"}
        label={"국가명"}
        type={"text"}
        value={data.country}
        handler={handleInputChange}
      />
      <Input
        id={"gold"}
        label={"금메달"}
        type={"number"}
        value={data.gold}
        handler={handleInputChange}
      />
      <Input
        id={"silver"}
        label={"은메달"}
        type={"number"}
        value={data.silver}
        handler={handleInputChange}
      />
      <Input
        id={"bronze"}
        label={"동메달"}
        type={"number"}
        value={data.bronze}
        handler={handleInputChange}
      />
      <Button type={"submit"} content={"국가 추가"} name={"addBtn"} />
      <Button type={"submit"} content={"업데이트"} name={"update"} />
    </form>
  );
};

export default InputForm;
