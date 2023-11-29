import { Link } from "react-router-dom";
import { useContext } from "react";
import { TokenContext } from "../context/TokenContext";


const Navigationbar = () => {
  const { isLogged } = useContext(TokenContext);

  return (
    <div className="w-screen bg-[#18181b] py-2 px-12">
      <div className="container text-sm mx-auto flex justify-between items-center text-neutral-100 px-4 md:px-2">
        <div>
          <Link className="text-3xl font-black" to="/">
            xCL.
          </Link>
        </div>
        <div className="flex gap-6">
          <Link to="/">Dashboard</Link>
          {isLogged ? (
            <Link to="/profile">Profile</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navigationbar;
