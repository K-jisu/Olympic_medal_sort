import { setLocalStorage } from "../utils/localStorage";
import { sortFunc } from "../utils/sortFunc";
import Input from "../atoms/Input";

const SortBox = ({ submitList, setSubmitList, checked, setChecked }) => {
  // 금 은 동 정렬
  const handleGoldMedalSort = () => {
    if (!checked) {
      setChecked((prev) => {
        return !prev;
      });
      // true : 정렬
      const updateList = sortFunc(submitList);
      setSubmitList(updateList);
      setLocalStorage("list", updateList);
    }
  };

  // 전체 메달 수 정렬
  const handleTotalMedalSort = () => {
    if (checked) {
      setChecked((prev) => {
        return !prev;
      });
      // true 정렬
      const totalMedalUpdate = [...submitList].sort((a, b) => {
        const totalA = Number(a.gold) + Number(a.silver) + Number(a.bronze);
        const totalB = Number(b.gold) + Number(b.silver) + Number(b.bronze);

        if (totalA === totalB) {
          return b.gold === a.gold
            ? b.silver === a.silver
              ? b.bronze - a.bronze
              : b.silver - a.silver
            : b.gold - a.gold;
        }

        return totalB - totalA;
      });
      setLocalStorage("list", totalMedalUpdate);
      setSubmitList(totalMedalUpdate);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "20px",
        margin: "20px 0",
      }}
    >
      <Input
        id="goldSort"
        type="radio"
        label="금 은 동"
        value="goldmedal"
        checked={checked}
        onChange={handleGoldMedalSort}
      />
      <Input
        id="totalSort"
        type="radio"
        label="총 메달 순"
        value="totalmedal"
        checked={!checked}
        onChange={handleTotalMedalSort}
      />
    </div>
  );
};

export default SortBox;
