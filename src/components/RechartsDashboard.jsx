import preciosEjemplo from "../preciosEjemplo.json";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const RechartsDashboard = () => {
  const prices = preciosEjemplo.prices.map((precio) => ({timestamp: precio[0], value: precio[1]}))
  
  return (
    <LineChart
      width={500}
      height={300}
      data={prices}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="timestamp"
        tickFormatter={(precio) => new Date(precio).toLocaleDateString()}
      />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#82ca9d" />
    </LineChart>
  );
};

export default RechartsDashboard;
