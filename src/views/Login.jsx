import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import EyeFilledIcon from "../components/EyeFilledIcon";
import EyeSlashFilledIcon from "../components/EyeSlashFilledIcon";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form className="flex flex-col mt-20 mx-auto h-auto md:w-3/6 gap-4">
      <Input
        isClearable
        type="email"
        variant="bordered"
        label="Email"
        placeholder="Enter your email"
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
        onClick={() => alert("Logging in ")}
        >
        Login
      </Button>
    </form>
  );
};
export default Login;
