import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import EyeFilledIcon from "../components/EyeFilledIcon";
import EyeSlashFilledIcon from "../components/EyeSlashFilledIcon";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const onLogin = async () => {
    const { data } = await axios.post("http://localhost:8000/login", {
      username: email,
      password,
    });
    console.log(data);
    localStorage.setItem("token", data.token);
    console.log(localStorage.getItem("token"));
  };

  return (
    <form className="flex flex-col mt-20 mx-auto h-auto md:w-3/6 gap-4">
      <Input
        isClearable
        type="email"
        variant="bordered"
        label="Username"
        placeholder="Enter your username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onClear={() => setEmail("")}
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
