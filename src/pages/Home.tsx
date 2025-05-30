import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">Habito trackie saas</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Build the UI for a responsive web application called "Habito", a habit tracker platform that uses Supabase for backend storage and authentication.

Core Requirements:

Authentication: Include sign up, login, and password reset UI. Use Supabase Auth.

Dashboard: After login, users should see a dashboard showing:

A list of their current habits

Daily/weekly progress for each habit

Quick buttons to add, edit, or delete habits

Habit Creation UI:

Form to create a habit with fields: name, description, frequency (daily/weekly), and goal (e.g., number of repetitions or days)

Habit Detail Page:

View progress, goal, and history of habit completion

Button to mark habit as completed for the day

Responsive Design: Should work smoothly on both mobile and desktop

Styling Preferences:

Clean, modern UI (suggest using Tailwind CSS or a similar utility-first framework)

Dark and light mode toggle

Deliverables:

All relevant UI components (React preferred, but can be vanilla HTML/CSS/JS if needed)

Optional: UI state examples with mock data (if Supabase isn't connected yet)

Assume Supabase is already configured and focus on UI/UX components only.</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md font-medium">
              Get Started
            </button>
            <button className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Feature One</h2>
            <p className="text-gray-600 dark:text-gray-300">A key feature of our application that provides significant value to users.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Feature Two</h2>
            <p className="text-gray-600 dark:text-gray-300">Another important capability that makes our application stand out.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Feature Three</h2>
            <p className="text-gray-600 dark:text-gray-300">A third key benefit that users will enjoy when using our application.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;