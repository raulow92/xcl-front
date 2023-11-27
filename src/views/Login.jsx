import { useState, useContext } from "react";
import { TokenContext } from "../context/TokenContext";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@nextui-org/react";
import EyeFilledIcon from "../components/EyeFilledIcon";
import EyeSlashFilledIcon from "../components/EyeSlashFilledIcon";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const { setIsLogged } = useContext(TokenContext);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const navigate = useNavigate();

  const onLogin = async () => {
    if (!username || !password) {
      alert("Please fill all the fields");
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:8000/login", {
        username,
        password,
      });
      console.log(data);
      localStorage.setItem("token", data.token);
      setIsLogged(true);
      console.log(localStorage.getItem("token"));
      navigate("/profile");
    } catch (error) {
      alert("Invalid credentials");
      console.log(error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onLogin();
    }
  };

  return (
    <form
      onKeyDown={handleKeyPress}
      className="flex flex-col mt-20 mx-auto h-auto md:w-3/6 gap-4"
    >
      <Input
        isClearable
        type="email"
        variant="bordered"
        label="Username"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onClear={() => setUsername("")}
      />
      <Input
        label="Password"
        variant="bordered"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
      />
      <Button
        color="default"
        variant="bordered"
        className="p-5"
        onClick={onLogin}
      >
        Login
      </Button>
    </form>
  );
};
export default Login;
