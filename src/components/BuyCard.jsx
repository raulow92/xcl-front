import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import numberWithCommas from "../logic/numberWithCommas";

const BuyCard = ({ balance_clp, balance_btc, price }) => {
  const [money, setMoney] = useState("");

  return (
    <form className="flex flex-col justify-center p-4 mx-auto w-full gap-4">
      <Input
        size="lg"
        variant="bordered"
        type="number"
        label={`You'll pay (max: ${numberWithCommas(balance_clp)} CLP)`}
        placeholder="0.00 CLP"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
        className="input-up"
      />
      <Input
        size="lg"
        variant="bordered"
        type="number"
        label={`You'll receive (max: ${(balance_clp / price).toFixed(6)} BTC)`}
        placeholder="0.00 BTC"
      />
      <Button
        color="warning"
        variant="shadow"
        size="lg"
      >
        Buy
      </Button>
    </form>
  );
};

export default BuyCard;
