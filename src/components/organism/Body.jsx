import React from 'react';
import Article from '../molecules/Article';


const Body = () => {
  return (
    <>
      <section>
        <div>
          <h5>국가명</h5>
          <h5>금메달</h5>
          <h5>은메달</h5>
          <h5>동메달</h5>
          <h5>액션</h5>
        </div>
        <Article/>
      </section>
    </>
  );
};

export default Body;