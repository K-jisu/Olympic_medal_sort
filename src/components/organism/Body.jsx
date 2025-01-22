import React from "react";
import Article from "../molecules/Article";

const Body = ({ submitList, setSubmitList }) => {
  // 목록 삭제
  const handleDelete = (e) => {
    const filteredData = submitList.filter(
      (item) => item.country !== e.nativeEvent.target.name
    );
    setSubmitList(filteredData);
  };
  return (
    <>
      <section>
        <div style={{display:"flex", gap:"20px"}}>
          <h5>국가명</h5>
          <h5>금메달</h5>
          <h5>은메달</h5>
          <h5>동메달</h5>
          <h5>총 메달 수</h5>
          <h5>액션</h5>
        </div>
        <Article submitList={submitList} handleDelete={handleDelete} />
      </section>
    </>
  );
};

export default Body;
