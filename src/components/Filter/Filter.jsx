import React from "react";
import style from "./Filter.module.css";

const Filter = ({ filter, onHandleChenge }) => {
  return (
    <div>
      <h3 className={style.title}>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onHandleChenge}
        className={style.input}
      />
    </div>
  );
};

export default Filter;
