import { useState } from "react";
import "./App.css";
import Body from "../organism/Body";
import Header from "../organism/Header";

function App() {
  const [data, setData] = useState({
    country: "",
    gold: "",
    silver: "",
    bronze: "",
  });
  const [submitList, setSubmitList] = useState([]);

  return (
    <>
      <Header
        setSubmitList={setSubmitList}
        setData={setData}
        data={data}
        submitList={submitList}
      />
      <Body submitList={submitList} setSubmitList={setSubmitList} />
    </>
  );
}

export default App;
