import React, { useEffect, useState } from "react";
import Test from "./Test";

const PreTest = () => {
  const [tasks, setTasks] = useState(-1);
  const [days, setDays] = useState(-1);
  const [durations, setDurations] = useState([]);
  const [start, setStart] = useState(-1);
  const [end, setEnd] = useState(-1);

  useEffect(() => {
    let array = [];
    if (start > 0 && end > 0 && start <= end) {
      array.push(start);
      array.push(end);
      setDurations([...durations, array]);
      setStart(-1);
      setEnd(-1);
      console.log(durations);
    }
  }, [start, end]);

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="The number of tasks..."
          onChange={(e) => {
            setTasks(parseInt(e.target.value));
          }}
        />
        <input
          type="text"
          placeholder="The number of days..."
          onChange={(e) => {
            setDays(parseInt(e.target.value));
          }}
        />
        {Array.from({ length: tasks }).map((_, id) => {
          return (
            <div>
              <input
                type="text"
                placeholder={`Start day of task ${id + 1}...`}
                onChange={(e) => {
                  setStart(parseInt(e.target.value));
                }}
              />
              <input
                type="text"
                placeholder={`End day of task ${id + 1}...`}
                onChange={(e) => {
                  setEnd(parseInt(e.target.value));
                }}
              />
            </div>
          );
        })}
      </form>
      {tasks > 0 && days > 0 && durations.length == tasks && (
        <Test n={tasks} days={days} chartdata={durations} />
      )}
    </div>
  );
};

export default PreTest;
