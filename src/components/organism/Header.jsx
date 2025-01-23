import InputForm from "../molecules/InputForm";

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
            return prev;
          } else {
            // 없을 때 추가 후 data 초기화
            setData({
              country: "",
              gold: "",
              silver: "",
              bronze: "",
            });
            return [...prev, data];
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
            // 국가가 있을 때 수정
            if (item.country === data.country) {
              return { ...item, ...data };
            } else {
              setData({
                country: "",
                gold: "",
                silver: "",
                bronze: "",
              });
              return item;
            }
          });
          return sortFunc(updateList);
        });
        break;
    }
  };

  //
  const sortFunc = (array) => {
    return array.sort((a, b) => {
      if (b.gold === a.gold) {
        return b.silver === a.silver
          ? b.bronze - a.bronze
          : b.silver - a.silver;
      } else {
        return b.gold - a.gold;
      }
    });
  };

  return (
    <>
      <InputForm
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        data={data}
      />
    </>
  );
};

export default Header;
