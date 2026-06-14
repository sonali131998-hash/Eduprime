/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { PrimeID } from "./pages/PrimeID";
import { Dashboard } from "./pages/Dashboard";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prime-id" element={<PrimeID />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Routes>
           <Route path="/dashboard" element={null} />
           <Route path="*" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}
