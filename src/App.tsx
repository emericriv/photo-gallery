import { Route, Routes } from "react-router";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <div className="min-h-screen bg-dark text-light transition-opacity duration-700">
      <Navbar />
      <div className="px-40">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
