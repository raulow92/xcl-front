import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Home from "./views/Home";
import Navigationbar from "./components/Navigationbar";
import Transactions from "./views/Transactions";
import Dashboard from "./views/Dashboard";
import Dash from "./views/Dash";

function App() {
  return (
    
    <Router>
        <Navigationbar />
      <div className="App container mx-auto px-4 md:px-0">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dash" element={<Dash />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
