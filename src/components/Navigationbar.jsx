import { Link } from "react-router-dom";
const Navigationbar = () => {
  return (
    <div className="w-screen bg-neutral-900 py-4 px-12">
      <div className="container text-sm mx-auto flex justify-between items-center text-neutral-100">
        <div>
          <Link className="text-3xl font-black" to="/">xCL.</Link>
        </div>
        <div className="flex gap-6">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/transactions">Transactions</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};
export default Navigationbar;
