import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import StudentDashboard from './pages/StudentDashboard';
import ConfidenceTracker from './pages/ConfidenceTracker';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="main-container">
        <nav className="bg-gray-100 shadow-md p-4 rounded-md">
          <ul className="flex gap-4 justify-center">
            <li>HomePage</li>
            <li>
              <Link
                to="/member1"
                className="px-4 py-2 border border-blue-500 text-blue-600 rounded hover:bg-blue-100 transition duration-200"
              >
                Go to Member 1 Work
              </Link>
            </li>
            <li>
              <Link
                to="/member2"
                className="px-4 py-2 border border-green-500 text-green-600 rounded hover:bg-green-100 transition duration-200"
              >
                Go to Member 2 Work
              </Link>
            </li>
            <li>
              <Link
                to="/studentDashboard"
                className="px-4 py-2 border border-purple-500 text-purple-600 rounded hover:bg-purple-100 transition duration-200"
              >
                Go to Member 3 Work
              </Link>
            </li>
            <li>
              <Link
                to="/member4"
                className="px-4 py-2 border border-red-500 text-red-600 rounded hover:bg-red-100 transition duration-200"
              >
                Go to Member 4 Work
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="px-4 py-2 border border-red-500 text-red-600 rounded hover:bg-red-100 transition duration-200"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/member1" element={<Page1 />} />
          <Route path="/member2" element={<Page2 />} />
          <Route path="/studentDashboard/*" element={<StudentDashboard />} /> {/* Fixed here */}
          <Route path="/member4" element={<ConfidenceTracker />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
