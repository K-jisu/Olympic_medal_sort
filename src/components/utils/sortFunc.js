  // 
  export const sortFunc = (array) => {
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