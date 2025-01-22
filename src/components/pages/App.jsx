import { useState } from "react";
import "./App.css";
import Button from "../atoms/Button";
import Body from "../organism/Body";
import Header from "../organism/Header";

function App() {
  // input이 입력될때마다 상태변화가 필요한가?
  // id 와 e.target.value 값을 setData에 넣어줌
  const [data, setData] = useState({
    country: " ",
    gold: 0,
    silver: 0,
    bronze: 0,
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
