require('dotenv').config(); // To load environment variables from .env file
const axios = require('axios');
const readline = require('readline');

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Load API key from environment variables
const apiKey = process.env.NEBIUS_API_KEY;

if (!apiKey) {
  console.error("Error: API Key is missing or incorrect!");
  process.exit(1); // Exit the script if API key is missing
}

// Define the NebiUS API endpoint
const api_url = "https://api.studio.nebius.ai/v1/chat/completions";

// Prompt the user for a project idea
rl.question('Please enter your project idea: ', (project_idea) => {
  // Define the data for the API request
  const data = {
    model: "meta-llama/Meta-Llama-3.1-70B-Instruct",
    messages: [
      {
        role: "user",
        content: `Here is a detailed project plan to help you finish your project idea before the deadline. The output should be in the following format: \n\n` +
          '```\n' +
          '[\n' +
          '  {"taskName": "Task Name", "duration": "Start Date to End Date", "description": "Detailed description of the task, tools, or methods used."},\n' +
          '  {"taskName": "Task Name", "duration": "Start Date to End Date", "description": "Detailed description of the task, tools, or methods used."}\n' +
          ']\n' +
          '```\n' +
          `The project idea is: ${project_idea}`
      }
    ],
    temperature: 0.6
  };

  // Define the headers for the API request
  const headers = {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json"
  };

  // Make the POST request to NebiUS API
  axios.post(api_url, data, { headers })
    .then(response => {
      // Check if the request was successful
      if (response.status === 200) {
        // Print the response content (project plan)
        console.log(response.data.choices[0].message.content);
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    })
    .catch(error => {
      console.error("Error:", error.message);
    })
    .finally(() => {
      rl.close(); // Close the input prompt
    });
});
