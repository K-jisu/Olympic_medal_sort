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
      // 국가 추가 버튼
      case "addBtn":
        setSubmitList((prev) => {
          if (prev.some((item) => item.country === data.country)) {
            alert("이미 있는 국가입니다!");
            return prev;
          }else {
            setData({
              country: "",
              gold: 0,
              silver: 0,
              bronze: 0,
            });
            return [...prev, data];
          }
        });
        break;
        // 업데이트 눌렀을 때
      case "update":
        if (!submitList.some((item) => item.country === data.country)) {
          alert("확인");
          setData({
            country: "",
            gold: 0,
            silver: 0,
            bronze: 0,
          });
          return;
        }
        setSubmitList((prev) => {
          const updateList = prev.map((item) => {
            if (item.country === data.country) {
              return { ...item, ...data };
            } else {
              setData({
                country: "",
                gold: 0,
                silver: 0,
                bronze: 0,
              });
              return item;
            }
          });
          return sortFunc(updateList);
        });
        break;
    }
  };

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
