import React, { useState } from "react";
import { generateProjectPlan } from "../Generate"; // Adjust the path as needed

const Form = () => {
  const [projectIdea, setProjectIdea] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await generateProjectPlan(projectIdea, startDate, endDate);
      setResponse(result);
    } catch (error) {
      setResponse("Failed to generate project plan.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", background: "#f9f9f9", borderRadius: "8px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Project Plan Generator</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Project Idea:</label>
          <textarea
            value={projectIdea}
            onChange={(e) => setProjectIdea(e.target.value)}
            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
            rows={4}
            required
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
            required
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
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
        <div style={{ marginTop: "20px", padding: "10px", background: "#fff", borderRadius: "4px", border: "1px solid #ccc" }}>
          <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>Generated Project Plan:</h2>
          <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{response}</pre>
        </div>
      )}
    </div>
  );
};

export default Form;
