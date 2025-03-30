import { Route, Routes } from "react-router";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { GalleryPage } from "./pages/GalleryPage";

function App() {
  return (
    <div className="min-h-screen bg-dark text-light transition-opacity duration-700">
      <Navbar />
      <div className="px-40 mt-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
