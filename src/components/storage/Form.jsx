import React, { useState } from "react";
import { generateProjectPlan } from "../Generate"; // Adjust the path as needed
import Test from "../Test";

const Form = () => {
  const [projectIdea, setProjectIdea] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [response, setResponse] = useState("");

  const [tasks, setTasks] = useState([]);
  const [fields, setFields] = useState([]);
  const [days, setDays] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await generateProjectPlan(projectIdea, startDate, endDate);
      setResponse(result);
      console.log(result);
      

      setTasks(result.split("ENDTASK"));
      // console.log("tasks", tasks);

      // setFields(tasks[0].split("ENDFIELD"));
      // console.log("fields", fields);

      // setDays(fields[1].split("ENDDAY"));
      // console.log("days", days);
    } catch (error) {
      console.log(error);

      setResponse("Failed to generate project plan.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        background: "#f9f9f9",
        borderRadius: "8px",
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Project Plan Generator
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Project Idea:
          </label>
          <textarea
            value={projectIdea}
            onChange={(e) => setProjectIdea(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            rows={4}
            required
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Start Date:
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>
            End Date:
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Generate Plan
        </button>
      </form>
      {response && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            background: "#fff",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>
            Generated Project Plan:
          </h2>
          <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
            {response}
          </pre>
          {/* <Test n={tasks.length} days={days} chartdata={durations} /> */}
          <Test
            tasks={tasks}
            startDate={startDate}
            endDate={endDate}
          />
        </div>
      )}
    </div>
  );
};

export default Form;
