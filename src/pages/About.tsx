import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About Habito trackie saas</h1>
        <p className="text-lg mb-8">Build the UI for a responsive web application called "Habito", a habit tracker platform that uses Supabase for backend storage and authentication.

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
        
        <div className="prose dark:prose-invert max-w-none">
          <h2>Our Mission</h2>
          <p>
            At Habito trackie saas, we're committed to providing the best possible experience for our users.
            Our mission is to create innovative solutions that make a real difference in people's lives.
          </p>
          
          <h2>Our Team</h2>
          <p>
            We're a dedicated team of professionals with expertise in design, development, and user experience.
            Together, we work tirelessly to bring you the best products and services.
          </p>
          
          <h2>Our Values</h2>
          <ul>
            <li>User-focused design</li>
            <li>Innovation and creativity</li>
            <li>Quality and excellence</li>
            <li>Integrity and transparency</li>
            <li>Continuous improvement</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;