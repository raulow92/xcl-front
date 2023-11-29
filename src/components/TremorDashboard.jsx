import { useEffect, useState } from "react";
import { Card, LineChart, Title } from "@tremor/react";
import axios from "axios";

const TremorDashboard = () => {
  const dateFormatter = (v) => new Date(v).toLocaleDateString();
  const [prices, setPrices] = useState([])
  
  useEffect(() => {
    const getPrices = async () => {
      const {data} = await axios.get("http://localhost:8000/chart")
      // console.log(data);
      const formatedPrices = data.prices.map((precio) => ({timestamp: dateFormatter(precio[0]), value: precio[1]}))
      setPrices(formatedPrices)
    }
    getPrices()
  }, [])

  return (
    <>
    <Card className="py-9">
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