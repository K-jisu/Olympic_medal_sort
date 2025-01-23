import InputForm from "../molecules/InputForm";
import { setLocalStorage } from "../utils/localStorage";
import { sortFunc } from "../utils/sortFunc";

const Header = ({ submitList, setSubmitList, setData, data }) => {
  const handleInputChange = (id, e) => {
    setData((prev) => ({
      ...prev,
      [id]: e.target.value,
    }));
  };

  // 추가 및 업데이트
  const handleSubmit = (e) => {
    e.preventDefault();
    switch (e.nativeEvent.submitter.name) {
      // 추가 버튼 클릭 시
      case "addBtn":
        // 입력 폼에 빈 값이 있을 때.
        if (Object.values(data).some((value) => value === "")) {
          alert("모든 항목을 작성해 주세요");
          return;
        }

        setSubmitList((prev) => {
          // 이미 국가가 있을 때.
          if (prev.some((item) => item.country === data.country)) {
            alert("이미 있는 국가입니다!");
            setData({
              country: "",
              gold: "",
              silver: "",
              bronze: "",
            });
            return prev;
          } else {
            setData({
              country: "",
              gold: "",
              silver: "",
              bronze: "",
            });
            // 없을 때 추가 후 data 초기화
            const sortedList = sortFunc([...prev, data]);
            setLocalStorage("list", sortedList);
            return sortedList;
          }
        });
        break;

      // 업데이트 클릭 시
      case "update":
        // 업데이트 국가가 없을 때.
        if (!submitList.some((item) => item.country === data.country)) {
          alert("국가를 먼저 추가해 주세요");
          setData({
            country: "",
            gold: "",
            silver: "",
            bronze: "",
          });
          return;
        }

        setSubmitList((prev) => {
          const updateList = prev.map((item) => {
            // data의 국가와 list의 국가가 일치시 수정
            if (item.country === data.country) {
              return { ...item, ...data };
            } else {
              // data의 국가와 list의 국가가 일치하지 않으면 그대로 둠
              return item;
            }
          });
          const sortedList = sortFunc(updateList);
          setLocalStorage("list", sortedList);
          return sortedList;
        });
        break;
    }
  };

  return (
    <header>
      <InputForm
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        data={data}
      />
    </header>
  );
};

export default Header;
