import React, { useState } from "react";
import Article from "../molecules/Article";
import Input from "../atoms/Input";
import { setLocalStorage } from "../utils/localStorage";
import { sortFunc } from "../utils/sortFunc";

const Body = ({ submitList, setSubmitList }) => {
  // 목록 삭제
  const handleDelete = (e) => {
    const filteredData = submitList.filter(
      (item) => item.country !== e.nativeEvent.target.name
    );
    setLocalStorage("list", filteredData);
    setSubmitList(filteredData);
  };

  const [checked, setChecked] = useState(true);

  // 금 은 동 정렬
  const handleGoldMedalSort = () => {
    if (!checked) {
      // false : true로 바꿈
      setChecked(!checked);
      // true : 정렬
      const updateList = sortFunc(submitList);
      setLocalStorage("list", updateList);
      setSubmitList(updateList);
    }
  };

  // 전체 메달 수 정렬
  const handleTotalMedalSort = () => {
    if (checked) {
      // false : true로 바꿈
      setChecked(!checked);
      // true 정렬
      const totalMedalUpdate = submitList.sort((a, b) => {
        // 전체 메달 수가 같으면
        if (
          Number(b.gold) +
            Number(b.silver) +
            Number(b.bronze) -
            (Number(a.gold) + Number(a.silver) + Number(a.bronze)) ===
          0
        ) { // 금 은 동 비교
          if (b.gold === a.gold) {
            return b.silver === a.silver
              ? b.bronze - a.bronze
              : b.silver - a.silver;
          } else {
            return b.gold - a.gold;
          }
        } else { // 아니면 전체 메달 수 정렬
          return (
            Number(b.gold) +
            Number(b.silver) +
            Number(b.bronze) -
            (Number(a.gold) + Number(a.silver) + Number(a.bronze))
          );
        }
      });
      setLocalStorage("list", totalMedalUpdate);
      setSubmitList(totalMedalUpdate);
    }
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
        <div>
          <Input
            id={"goldSort"}
            type={"checkbox"}
            label={"메달 순"}
            value={"goldmedal"}
            checked={checked}
            onChange={handleGoldMedalSort}
          />
          <Input
            id={"totalSort"}
            type={"checkbox"}
            label={"총 메달 순"}
            value={"totalmedal"}
            checked={!checked}
            onChange={handleTotalMedalSort}
          />
        </div>
        <Article submitList={submitList} handleDelete={handleDelete} />
      </section>
    </main>
  );
};

export default Body;
