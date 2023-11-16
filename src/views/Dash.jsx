import { useState } from "react";
import { Card, LineChart, Title } from "@tremor/react";
import preciosEjemplo from "../preciosEjemplo.json";

const prices = preciosEjemplo.prices.map((precio) => ({timestamp: precio[0], value: precio[1]}))
const valueFormatter = (v) => new Date(v).toLocaleDateString();

const Dash = () => {
  const [value, setValue] = useState(null);
  return (
    <>
      <Card>
        <Title>Closed Pull Requests</Title>
        <LineChart
          className="h-72 mt-4"
          data={prices}
          index="timestamp"
          categories={["value"]}
          colors={["indigo"]}

          yAxisWidth={60}
        />
      </Card>
    </>
  );
}

export default Dash