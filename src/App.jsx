import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Home from "./views/Home";
import Navigationbar from "./components/Navigationbar";
import Transactions from "./views/Transactions";
import Dashboard from "./views/Dashboard";
function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
