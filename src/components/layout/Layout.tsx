import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../ui/ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">Habito trackie saas</Link>
            <nav className="hidden md:flex gap-6">
              <Link to="/" className="hover:text-white/80">Home</Link>
              <Link to="/about" className="hover:text-white/80">About</Link>
              <Link to="/features" className="hover:text-white/80">Features</Link>
              <Link to="/contact" className="hover:text-white/80">Contact</Link>
            </nav>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button className="bg-white text-primary px-4 py-2 rounded-md font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Habito trackie saas</h3>
              <p className="text-gray-300">Build the UI for a responsive web application called "Habito", a habit tracker platform that uses Supabase for backend storage and authentication.

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
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
                <li><Link to="/features" className="text-gray-300 hover:text-white">Features</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-300">Email: info@habitotrackiesaas.com</p>
              <p className="text-gray-300">Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Habito trackie saas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};