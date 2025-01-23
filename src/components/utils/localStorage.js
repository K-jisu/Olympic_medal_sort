export const setLocalStorage = (id, data) => {
  localStorage.setItem(id, JSON.stringify(data));
};

export const getLocalStorage = (id) => {
  // 로컬에 저장된 문자열을 배열로 변환
  const LocalData = JSON.parse(localStorage.getItem(id));
  return LocalData;
};
