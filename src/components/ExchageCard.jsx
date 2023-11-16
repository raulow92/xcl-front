import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import BuyCard from "./BuyCard";
import SellCard from "./SellCard";

const ExchangeCard = () => {
  return (
    <div className="flex flex-col h-96">
      <Tabs aria-label="Options">
        <Tab key="buy" title="Comprar" className="h-12 text-xl">
          <Card className="">
            <CardBody className="">
              <BuyCard />
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="sell" title="Vender" className=" text-xl">
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