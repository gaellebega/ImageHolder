import { Routes, Route } from "react-router-dom";

import ArtworkGallery from "./components/ArtworkGallery";
import Navbar from "./components/Navbar";
import Av from "./components/Av";

function App() {
  return (
    <main>
      <Navbar />

      <Routes>
        <Route path="/" element={<ArtworkGallery />} />
        <Route path="/key-art" element={<ArtworkGallery />} />
        <Route path="/av" element={<Av />} />
      </Routes>
    </main>
  );
}

export default App;