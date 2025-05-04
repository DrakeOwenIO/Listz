import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Splashpage from "./components/Splashpage/Splashpage";
import Dashboard from "./components/Dashboard/Dashboard";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Router>
        <Routes>
          <Route path='/' element={<Splashpage />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;