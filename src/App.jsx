import { Routes, Route } from "react-router-dom";

import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Add } from "./pages/Add";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/add"
          element={<Add />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;