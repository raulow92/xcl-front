import TremorDashboard from "../components/TremorDashboard";
import ExchangeCard from "../components/ExchageCard";

const Dashboard = () => {

  return (
    <div className="grid lg:grid-cols-2 mt-8 gap-6">
      <TremorDashboard />
      <ExchangeCard />
    </div>
  );
};
export default Dashboard;
