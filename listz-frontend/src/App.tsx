import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Splashpage from "./components/Splashpage/Splashpage";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Router>
        <Routes>
          <Route path='/' element={<Splashpage />} />
          <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;