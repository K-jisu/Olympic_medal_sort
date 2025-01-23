import Article from "../molecules/Article";
import { setLocalStorage } from "../utils/localStorage";

const Body = ({ submitList, setSubmitList }) => {
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
        <div style={{ display: "flex", gap: "20px" }}>
          <h5>국가명</h5>
          <h5>금메달</h5>
          <h5>은메달</h5>
          <h5>동메달</h5>
          <h5>총 메달 수</h5>
          <h5>액션</h5>
        </div>
        <Article submitList={submitList} handleDelete={handleDelete} />
      </section>
    </main>
  );
};

export default Body;
