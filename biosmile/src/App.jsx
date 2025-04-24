import NavbarC from "./components/NavbarC";
import { BrowserRouter as Router, Routes, Route } from "react-router";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/navbar" element={<NavbarC />} />
      </Routes>
    </Router>
  );
};

export default App;
