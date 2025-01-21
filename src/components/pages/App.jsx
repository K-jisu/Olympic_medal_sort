import { useState } from "react";
import "./App.css";
import Button from "../atoms/Button";
import Body from "../organism/Body";

function App() {
  // input이 입력될때마다 상태변화가 필요한가?
  // id 와 e.target.value 값을 setData에 넣어줌
  const [data, setData] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });
  const [submitList, setSubmitList] = useState([]);

  const handleInputChange = (id, e) => {
    setData((prev) => ({
      ...prev,
      [id]: e,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (e.nativeEvent.submitter.name) {
      case "addBtn":
        setSubmitList((prev) => [...prev, data]);
        break;
      case "update":
        setSubmitList((prev) =>
          prev.map((item) => {
            if (item.country === data.country) {
              return { ...item, ...data };
            } else {
              return item;
            }
          })
        );
        break;
    }
  };

  const handleDelete = (e) => {
    console.log(e)
    submitList.forEach((item)=>{
      // console.log(item.country)
    })
  };
  return (
    <>
      {/* <Header /> */}
      {/* <Body /> */}
      <header>
        <h1>2024 파리 올림픽</h1>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="country">국가명</label>
            <input
              id="country"
              type="text"
              onChange={(e) => handleInputChange("country", e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="gold">금메달</label>
            <input
              id="gold"
              type="number"
              onChange={(e) => handleInputChange("gold", e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="silver">은메달</label>
            <input
              id="silver"
              type="number"
              onChange={(e) => handleInputChange("silver", e.target.value)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="bronze">동메달</label>
            <input
              id="bronze"
              type="number"
              onChange={(e) => handleInputChange("bronze", e.target.value)}
            />
          </div>
          <Button type={"submit"} content={"국가 추가"} name={"addBtn"} />
          <Button type={"submit"} content={"업데이트"} name={"update"} />
        </form>
      </header>
      <main>
        <section>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h4>국가명</h4>
            <h4>금메달</h4>
            <h4>은메달</h4>
            <h4>동메달</h4>
            <h4>액션</h4>
          </div>
          {submitList.map((item) => {
            return (
              <article style={{ display: "flex", flexDirection: "row" }}>
                <p>{item.country}</p>
                <p>{item.gold}</p>
                <p>{item.silver}</p>
                <p>{item.bronze}</p>
                <Button type={"button"} content={"삭제"} event={handleDelete}/>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
