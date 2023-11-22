import { Card, LineChart, Title } from "@tremor/react";
import preciosEjemplo from "../preciosEjemplo.json";

const dateFormatter = (v) => new Date(v).toLocaleDateString();
const prices = preciosEjemplo.prices.map((precio) => ({timestamp: dateFormatter(precio[0]), value: precio[1]}))

const TremorDashboard = () => {

  return (
    <>
    <Card>
      <Title>CLP/BTC</Title>
      <LineChart
        className="h-96"
        data={prices}
        index="timestamp"
        categories={["value"]}
        colors={["green"]}
        yAxisWidth={60}
      />
    </Card>
  </>
  )
}

export default TremorDashboard