import { useEffect, useState } from "react";
import { Tabs, Tab, Card, CardBody, Divider } from "@nextui-org/react";
import BuyCard from "./BuyCard";
import SellCard from "./SellCard";
import axios from "axios";
import numberWithCommas from "../logic/numberWithCommas";

const ExchangeCard = () => {
  const [buyQty, setBuyQty] = useState(0);
  const [sellQty, setSellQty] = useState(0);
  const [price, setPrice] = useState(0);
  const [wallet, setWallet] = useState({ balance_clp: 0, balance_btc: 0 });
  const { balance_clp, balance_btc } = wallet;

  useEffect(() => {
    const getWallet = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const { data } = await axios.get("http://localhost:8000/wallet", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(data);
        setWallet(data);
      }
    };
    getWallet();
  }, []);

  useEffect(() => {
    const getPrice = async () => {
      const { data } = await axios.get("http://localhost:8000/price");
      console.log(data);
      setPrice(data.bitcoin.clp);
    };
    getPrice();
  }, []);

  return (
    <div className="flex flex-col h-96">
      <Card className="text-base py-4 px-6 mb-6">
        <CardBody className="">
          <h2 className="text-xl">Wallet</h2>
          <Divider />
          <div className="grid grid-cols-3 mt-4">
            <p className="text-lg">
              <span className="text-sm">You have:</span> {numberWithCommas(balance_clp)}{" "}
              CLP
            </p>
            <p className="text-lg text-center">
              <span className="text-sm">You have:</span> {numberWithCommas(balance_btc)}{" "}
              BTC
            </p>
            <p className="text-lg text-right">
              <span className="text-sm">Total:</span> {numberWithCommas(((balance_btc * price) + balance_clp).toFixed(2))}{" "}
              CLP
            </p>
          </div>
        </CardBody>
      </Card>
      <Tabs aria-label="Options">
        <Tab key="buy" title="Buy" className="h-12 text-lg px-6">
          <Card className="-mx-6">
            <CardBody>
              <BuyCard
                balance_clp={balance_clp}
                balance_btc={balance_btc}
                price={price}
              />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="sell" title="Sell" className="h-12 text-lg px-6">
          <Card className="-mx-6">
            <CardBody>
              <SellCard 
                balance_clp={balance_clp}
                balance_btc={balance_btc}
                price={price}
              />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ExchangeCard;
