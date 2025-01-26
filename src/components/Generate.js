import dotenv from 'dotenv'; // To load environment variables from .env file
import axios from 'axios';
import readline from 'readline';

// Load environment variables from .env file
dotenv.config();

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
        content: `Generate a detailed project plan for the following idea: ${project_idea}. The output should be in this format: \n\n` +
          '[{"taskName": "Research user needs", "duration": "2025-01-01 to 2025-01-07", "description": "Conduct surveys using Google Forms and interviews via Zoom to identify key features users want in the app."}, ' +
          '{"taskName": "Design app UI/UX", "duration": "2025-01-08 to 2025-01-14", "description": "Create wireframes in Figma and high-fidelity mockups in Adobe XD, focusing on intuitive navigation and accessibility."}, ' +
          '{"taskName": "Develop core functionality", "duration": "2025-01-15 to 2025-02-10", "description": "Use Flutter and Firebase to build features like expense tracking, budgeting, and generating financial reports."}, ' +
          '{"taskName": "Test app functionality", "duration": "2025-02-11 to 2025-02-20", "description": "Perform unit testing with Jest and integration testing using Selenium to identify and fix bugs."}, ' +
          '{"taskName": "Launch and gather feedback", "duration": "2025-02-21 to 2025-03-01", "description": "Deploy the app on Google Play and the Apple App Store, and use tools like Google Analytics and user reviews for feedback."}]'
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
