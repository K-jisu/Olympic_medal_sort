import { useState } from "react";
import "../styles/App.css/";
import Body from "../organism/Body";
import FormContainer from "../organism/FormContainer";
import SortBox from "../molecules/SortBox";
import { getLocalStorage } from "../utils/localStorage";

function App() {
  const [submitList, setSubmitList] = useState(getLocalStorage("list") || []);
  const [checked, setChecked] = useState(true);

  return (
    <>
      <FormContainer setSubmitList={setSubmitList} submitList={submitList} />
      <SortBox
        submitList={submitList}
        setSubmitList={setSubmitList}
        checked={checked}
        setChecked={setChecked}
      />
      <Body submitList={submitList} setSubmitList={setSubmitList} />
    </>
  );
}

export default App;
