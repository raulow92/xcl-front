import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Navigationbar from "./components/Navigationbar";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    
    <Router>
        <Navigationbar />
      <div className="App container mx-auto px-4 md:px-0">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
