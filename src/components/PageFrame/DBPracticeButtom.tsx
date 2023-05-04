import React from "react";
import axios from "axios";
import { useState } from "react";

const DBPracticeButtom = () => {
  const [CSList, setCSList] = useState([]);
  const getDB = () => {
    axios
      .get("http://localhost:4000/api/customer")
      .then((response) => setCSList(response.data));
  };

  interface CSListInfo {
    c_idx: number;
    email: string;
  }

  return (
    <div>
      <button onClick={getDB}>DB PRACTICE</button>
      {CSList?.map((item: CSListInfo) => (
        <div key={item.c_idx}>{item.email}</div>
      ))}
    </div>
  );
};

export default DBPracticeButtom;
