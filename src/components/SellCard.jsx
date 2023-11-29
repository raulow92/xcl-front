import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import numberWithCommas from "../logic/numberWithCommas";

const SellCard = ({balance_btc, price}) => {
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
    setInputSell((e.target.value / price).toFixed(6));
  }

  return (
    <form className="flex flex-col justify-center p-4 mx-auto w-full gap-4">
      <Input
        size="lg"
        variant="bordered"
        type="number"
        label={`You'll sell (max: ${numberWithCommas(balance_btc)} BTC)`}
        placeholder="0.00 BTC"
        onChange={handleSellChange}
        value={inputSell}
        min={0}
        max={balance_btc}
      />
      <Input
        size="lg"
        variant="bordered"
        type="number"
        label={`You'll receive (max: ${numberWithCommas(balance_btc * price)} CLP)`}
        placeholder="0.00 CLP"
        onChange={handleReceiveChange}
        value={inputReceive}
        min={0}
        max={balance_btc * price}
      />
      <Button
        color="warning"
        variant="shadow"
        className="text-base font-medium p-5"
        size="lg"
        isDisabled={inputSell > balance_btc || inputSell <= 0 || inputSell === undefined}
      >
        Sell
      </Button>
    </form>
  );
};

export default SellCard;
