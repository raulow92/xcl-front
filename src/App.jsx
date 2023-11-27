import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Navigationbar from "./components/Navigationbar";
import Dashboard from "./views/Dashboard";
import { TokenContext } from "./context/TokenContext";
import { useEffect, useState } from "react";

const App = () => {

  const getTokenFromLocalStorage = () => {
    const token = localStorage.getItem("token");
    return token && null;
  };

  const [isLogged, setIsLogged] = useState(getTokenFromLocalStorage());

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    }
  }, []);

  return (
    <TokenContext.Provider value={{isLogged, setIsLogged}}>
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
    </TokenContext.Provider>
  );
};
export default App;
