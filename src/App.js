import Carousel from "./components/Carousel";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Select from "./components/Select";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>

        <Search />
        <Select />
        <Carousel />
        <Footer />
      </Router>
    </>
  );
}

export default App;
