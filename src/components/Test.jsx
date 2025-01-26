import React from "react";
import "./Test.css";

const Test = (props) => {
  // const n = 11;
  // const days = 30;
  // const chartdata = [
  //   [1, 3],
  //   [2, 5],
  //   [6, 8],
  //   [8, 10],
  //   [11, 13],
  //   [13, 15],
  //   [13, 20],
  //   [17, 22],
  //   [23, 24],
  //   [25, 30],
  //   [30, 30],
  // ];

  // const now = new Date();

  console.log(props);
  const startDate = new Date(props.startDate);
  const endDate = new Date(props.endDate);
  console.log((endDate - startDate) / (1000 * 60 * 60 * 24) + 1);
  const days = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;

  return (
    <div className="chart">
      <div className="tasks">
        <div className="task">
          Tasks
        </div>
        {props.tasks.map((task, id) => {
          if (task == "") return;
          return (
            <div className="task" contenteditable="true">
              {`${task.split("ENDFIELD")[0].replace("'taskName':", "")}`}
            </div>
          );
        })}
      </div>
      <div className="timeline_wrapper">
        <div className="timeline">
          <div className="timerow">
            {Array.from(
              {
                length: days,
              },
              (_, i) => {
                const date = new Date(props.startDate);
                date.setDate(date.getDate() + (i + 1));
                return date;
              }
            ).map((d, index) => {
              return <div className="timeslot">{d.toDateString()}</div>;
            })}
          </div>
          {props.tasks.map((task, id) => {
            if (task == "") return;
            return (
              <div className="timerow">
                {Array.from(
                  {
                    length: days,
                  },
                  (_, i) => {
                    const date = new Date(props.startDate);
                    date.setDate(date.getDate() + (i + 1));
                    return date;
                  }
                ).map((d, index) => {
                  d.setHours(0, 0, 0, 0);
                  if (
                    d >=
                      new Date(
                        task
                          .split("ENDFIELD")[1]
                          .split("to")[0]
                          .replace("'duration':", "")
                          .replace(" ", "")
                      ) &&
                    d <=
                      new Date(
                        task
                          .split("ENDFIELD")[1]
                          .split("to")[1]
                          .replace("'duration':", "")
                          .replace(" ", "")
                      )
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
