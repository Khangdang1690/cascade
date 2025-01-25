import React from "react";
import "./Test.css";

const Test = () => {
  const n = 11;
  const days = 30;
  const chartdata = [
    [1, 3],
    [2, 5],
    [6, 8],
    [8, 10],
    [11, 13],
    [13, 15],
    [13, 20],
    [17, 22],
    [23, 24],
    [25, 30],
    [30, 30],
  ];

  return (
    <div class="chart">
      <div class="tasks">
        {Array.from({ length: n }).map((task, id) => {
          return (
            <div className="task" contenteditable="true">
              {`Task ${id + 1}`}
            </div>
          );
        })}
      </div>
      <div class="timeline_wrapper">
        <div class="timeline">
          {Array.from({ length: n }).map((task, id) => {
            return (
              <div className="timerow">
                {Array.from({ length: days }).map((days, id2) => {
                  if (
                    id2 + 1 >= chartdata[id][0] &&
                    id2 + 1 <= chartdata[id][1]
                  ) {
                    return (
                      <div
                        className={`timeslot timeslot_${(id % 4) + 1}`}
                      ></div>
                    );
                  } else {
                    return <div className="timeslot"></div>;
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Test;
