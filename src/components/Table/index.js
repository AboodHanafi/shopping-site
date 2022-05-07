import "./style.css";
import React from "react";

const Table = () => {
  return (
    <div className="inner-container table flex">
      <h1>Technical Details</h1>
      <div className=" ulList flex">
        {[1, 2].map(() => {
          return (
            <ul className="tablelist flex">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                return (
                  <li className="flex">
                    <span className="first-span-table">Brand:</span>
                    <span className="second-span-table">Apple</span>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
