import Button from "../atoms/Button";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import "../styles/body.css";

const Body = ({ submitList, setSubmitList }) => {
  const localStorageList = getLocalStorage("list");

  // 목록 삭제
  const handleDelete = (e) => {
    const filteredData = submitList.filter(
      (item) => item.country !== e.nativeEvent.target.name
    );
    setLocalStorage("list", filteredData);
    setSubmitList(filteredData);
  };

  return (
    <main>
      <section>
        <div className="item">
          <h5>국가명</h5>
          <h5>금메달</h5>
          <h5>은메달</h5>
          <h5>동메달</h5>
          <h5>총 메달 수</h5>
          <h5>액션</h5>
        </div>
        {localStorageList.map((item) => {
          return (
            <article
              key={item.country}
            >
              <p>{item.country}</p>
              <p>{item.gold}</p>
              <p>{item.silver}</p>
              <p>{item.bronze}</p>
              <p>
                {Number(item.gold) + Number(item.silver) + Number(item.bronze)}
              </p>
              <Button
                type={"button"}
                content={"삭제"}
                name={item.country}
                onClick={handleDelete}
              />
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Body;
