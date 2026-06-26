import { Routes, Route, useLocation } from "react-router-dom";

import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Add } from "./pages/Add";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import Login   from './pages/Login'
import Signup  from './pages/Signup'
import Protected from './pages/Protected'

function App() {
  const location = useLocation();
  const hideOn = ['/login', '/signup'];

  return (
    <>
      {!hideOn.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Protected><Home /></Protected>} />

        <Route
          path="/products"
          element={<Protected><Products /></Protected>}
        />
         <Route path="/login"    element={<Login />} />
          <Route path="/signup"   element={<Signup />} />
        <Route
          path="/add"
          element={<Protected><Add /></Protected>}
        />

        <Route
          path="/about"
          element={<Protected><About /></Protected>}
        />

        <Route
          path="/contact"
          element={<Protected><Contact /></Protected>}
        />
      </Routes>

      {!hideOn.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;