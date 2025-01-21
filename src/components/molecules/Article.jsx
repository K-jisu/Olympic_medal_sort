import React from "react";
import Button from "../atoms/Button";

const Article = () => {
  const submitList = [{
    id:1,
    country:"캐나다",
    gold : 2,
    silver : 4,
    bronze : 10,
  }, 
  {
    id:2,
    country:"미국",
    gold : 2,
    silver : 4,
    bronze : 10,
  }
  ]
  return (
    <>
      {submitList.map((item) => {
        return (
          <article key={item.id}>
            <p>{item.country}</p>
            <p>{item.gold}</p>
            <p>{item.silver}</p>
            <p>{item.bronze}</p>
            <Button type = {"button"} content= {"삭제"}/>
          </article>
        );
      })}
    </>
  );
};

export default Article;
