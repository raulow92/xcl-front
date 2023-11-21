import {Tabs, Tab, Card, CardBody, Divider} from "@nextui-org/react";
import BuyCard from "./BuyCard";
import SellCard from "./SellCard";

const ExchangeCard = () => {
  return (
    <div className="flex flex-col h-96">
      <Card className="text-base py-4 px-6 mb-6">
        <CardBody className="">
          <h2 className="text-xl">Billetera</h2>
          <Divider/>
          <div className="grid grid-cols-2 mt-4">
            <p className="text-lg"><span className="text-sm">Tienes:</span> 0.00 CLP</p>
            <p className="text-lg"><span className="text-sm">Tienes:</span> 0.00 BTC</p>
          </div>
        </CardBody>
      </Card>
      <Tabs aria-label="Options">
        <Tab key="buy" title="Comprar" className="h-12 text-base">
          <Card className="">
            <CardBody className="">
              <BuyCard />
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="sell" title="Vender" className="h-12 text-base">
          <Card>
            <CardBody>
              <SellCard />
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
  )
}

export default ExchangeCard