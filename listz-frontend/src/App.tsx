import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Splashpage from "./components/Splashpage/Splashpage";
function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Router>
        <Routes>
          <Route path='/' element={<Splashpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;