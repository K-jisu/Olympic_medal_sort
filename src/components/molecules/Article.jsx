import React from "react";
import Button from "../atoms/Button";

const Article = ({ submitList, handleDelete }) => {
  return (
    <>
      {submitList.map((item) => {
        return (
          <article
            key={item.country}
            style={{ display: "flex", flexDirection: "row", gap: "20px" }}
          >
            <p>{item.country}</p>
            <p>{item.gold}</p>
            <p>{item.silver}</p>
            <p>{item.bronze}</p>
            <p>
              {Number(item.gold) + Number(item.silver) + Number(item.bronze)}
            </p>
            <Button
              type={"button"}
              content={"삭제"}
              name={item.country}
              event={handleDelete}
            />
          </article>
        );
      })}
    </>
  );
};

export default Article;
