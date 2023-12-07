import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import numberWithCommas from "../logic/numberWithCommas";
import axios from "axios";

const SellCard = ({balance_btc, price, setWallet }) => {
  const [inputSell, setInputSell] = useState(undefined);
  const [inputReceive, setInputReceive] = useState(undefined);

  const handleSellChange = (e) => {
    setInputSell(e.target.value);
    if (e.target.value === "") {
      setInputReceive("");
      return;
    }
    setInputReceive((e.target.value * price).toFixed(2));
  }

  const handleReceiveChange = (e) => {
    setInputReceive(e.target.value);
    if (e.target.value === "") {
      setInputSell("");
      return;
    }
    setInputSell((e.target.value / price).toFixed(8));
  }

  const sellBtc = async () => {
    const token = localStorage.getItem('token')
    const response = await axios.post('http://localhost:8000/sell/' + inputSell, {}, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    }) 
    setWallet({balance_btc: response.data.balance_btc, balance_clp: response.data.balance_clp})
    setInputSell("")
    setInputReceive("")
  }


  return (
    <form className="flex flex-col justify-center p-4 mx-auto w-full gap-4">
      <Input
        size="lg"
        variant="bordered"
        type="number"
        label={`You'll sell (max: ${+balance_btc} BTC)`}
        placeholder="0.00 BTC"
        onChange={handleSellChange}
        value={inputSell || ""}
        min={0}
        max={+balance_btc ? +balance_btc : undefined}
      />
      <Input
        size="lg"
        variant="bordered"
        type="number"
        label={`You'll receive (max: ${numberWithCommas((+balance_btc * +price).toFixed(2))} CLP)`}
        placeholder="0.00 CLP"
        onChange={handleReceiveChange}
        value={inputReceive || ""}
        min={0}
        max={+balance_btc || +price ? (+balance_btc * +price) : undefined}
      />
      <Button
        color="warning"
        variant="shadow"
        className="text-base font-medium p-5"
        size="lg"
        isDisabled={+inputSell > +balance_btc || +inputSell <= 0 || inputSell === undefined}
        onClick={sellBtc}
      >
        Sell
      </Button>
    </form>
  );
};

export default SellCard;
