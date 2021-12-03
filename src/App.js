import "./App.css";
import "./index.css";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Topics from "./Topics";
function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics/*" element={<Topics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
