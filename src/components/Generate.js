import axios from 'axios';

// Access the API key using Vite's import.meta.env
const apiKey =  import.meta.env.VITE_NEBIUS_API_KEY;

if (!apiKey) {
  throw new Error("API Key is missing or incorrect!");
}

const api_url = "https://api.studio.nebius.ai/v1/chat/completions";

export const generateProjectPlan = async (projectIdea, startDate, endDate) => {
  const data = {
    model: "meta-llama/Meta-Llama-3.1-70B-Instruct",
    messages: [
      {
        role: "user",
        content: `Generate a detailed project plan for the following idea: ${projectIdea}, starting from ${startDate} and ending on ${endDate}. The output should be in this format: \n\n` +
          '[{"taskName": "Research user needs", "duration": "2025-01-01 to 2025-01-07", "description": "Conduct surveys using Google Forms and interviews via Zoom to identify key features users want in the app."}, ' +
          '{"taskName": "Design app UI/UX", "duration": "2025-01-08 to 2025-01-14", "description": "Create wireframes in Figma and high-fidelity mockups in Adobe XD, focusing on intuitive navigation and accessibility."}, ' +
          '{"taskName": "Develop core functionality", "duration": "2025-01-15 to 2025-02-10", "description": "Use Flutter and Firebase to build features like expense tracking, budgeting, and generating financial reports."}, ' +
          '{"taskName": "Test app functionality", "duration": "2025-02-11 to 2025-02-20", "description": "Perform unit testing with Jest and integration testing using Selenium to identify and fix bugs."}, ' +
          '{"taskName": "Launch and gather feedback", "duration": "2025-02-21 to 2025-03-01", "description": "Deploy the app on Google Play and the Apple App Store, and use tools like Google Analytics and user reviews for feedback."}]'
      }
    ],
    temperature: 0.6
  };

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.post(api_url, data, { headers });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to generate project plan.");
  }
};
