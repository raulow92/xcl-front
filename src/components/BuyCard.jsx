import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import numberWithCommas from "../logic/numberWithCommas";

const BuyCard = ({ balance_clp, price }) => {
  const [inputBuy, setInputBuy] = useState(undefined);
  const [inputReceive, setInputReceive] = useState(undefined);

  const handlePayChange = (e) => {
    setInputBuy(e.target.value);
    if (e.target.value === "") {
      setInputReceive("");
      return;
    }
    setInputReceive((e.target.value / price).toFixed(6));
  }

  const handleReceiveChange = (e) => {
    setInputReceive(e.target.value);
    if (e.target.value === "") {
      setInputBuy("");
      return;
    }
    setInputBuy((e.target.value * price).toFixed(2));
  }

  return (
    <form className="flex flex-col justify-center p-4 mx-auto w-full gap-4">
      <Input
        size="lg"
        variant="bordered"
        type="number"
        label={`You'll pay (max: ${numberWithCommas(balance_clp)} CLP)`}
        placeholder="0.00 CLP"
        onChange={handlePayChange}
        value={inputBuy}
        min={0}
        max={balance_clp ? balance_clp : undefined}
      />
      <Input
        size="lg"
        variant="bordered"
        type="number"
        label={`You'll receive (max: ${(balance_clp / price).toFixed(6)} BTC)`}
        placeholder="0.00 BTC"
        onChange={handleReceiveChange}
        value={inputReceive}
        min={0}
        max={balance_clp || price ? (balance_clp / price) : undefined}
      />
      <Button
        color="warning"
        variant="shadow"
        size="lg"
        isDisabled={inputBuy > balance_clp || inputBuy <= 0 || inputBuy === undefined}
      >
        Buy
      </Button>
    </form>
  );
};

export default BuyCard;
