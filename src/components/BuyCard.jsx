import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import numberWithCommas from "../logic/numberWithCommas";
import axios from "axios";

const BuyCard = ({ balance_clp, price, setWallet }) => {
  const [inputBuy, setInputBuy] = useState(undefined);
  const [inputReceive, setInputReceive] = useState(undefined);

  const handlePayChange = (e) => {
    setInputBuy(e.target.value);
    if (e.target.value === "") {
      setInputReceive("");
      return;
    }
    setInputReceive((e.target.value / price).toFixed(8));
  }

  const handleReceiveChange = (e) => {
    setInputReceive(e.target.value);
    if (e.target.value === "") {
      setInputBuy("");
      return;
    }
    setInputBuy((e.target.value * price).toFixed(0));
  }

  const buyBtc = async () => {
    const token = localStorage.getItem('token')
    const response = await axios.post('http://localhost:8000/buy/' + inputReceive, {}, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    }) 
    setWallet({balance_btc: response.data.balance_btc, balance_clp: response.data.balance_clp})
    setInputBuy("")
    setInputReceive("")
  }

  return (
    <form className="flex flex-col justify-center p-4 mx-auto w-full gap-4">
      <Input
        size="lg"
        variant="bordered"
        type="number"
        label={`You'll pay (max: ${numberWithCommas(+balance_clp)} CLP)`}
        placeholder="0.00 CLP"
        onChange={handlePayChange}
        value={inputBuy || ""}
        min={0}
        max={+balance_clp ? +balance_clp : undefined}
      />
      <Input
        size="lg"
        variant="bordered"
        type="number"
        label={`You'll receive (max: ${(+balance_clp / +price).toFixed(8)} BTC)`}
        placeholder="0.00 BTC"
        onChange={handleReceiveChange}
        value={inputReceive || ""}
        min={0}
        max={+balance_clp || price ? (+balance_clp / +price) : undefined}
      />
      <Button
        color="warning"
        variant="shadow"
        size="lg"
        isDisabled={+inputBuy > +balance_clp || +inputBuy <= 0 || inputBuy === undefined}
        onClick={buyBtc}
      >
        Buy
      </Button>
    </form>
  );
};

export default BuyCard;
