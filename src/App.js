import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Work from "./pages/Work";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
