import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Work from "./pages/Work";
import FourOFour from "./pages/404";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/*" element={<FourOFour/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
