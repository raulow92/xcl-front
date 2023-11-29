import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import numberWithCommas from "../logic/numberWithCommas";

const SellCard = ({balance_clp, balance_btc, price}) => {
  const [money, setMoney] = useState("");

  return (
    <form className="flex flex-col justify-center p-4 mx-auto w-full gap-4">
      <Input
        size="lg"
        variant="bordered"
        type="number"
        label={`You'll sell (max: ${numberWithCommas(balance_btc)} BTC)`}
        placeholder="0.00 BTC"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
      />
      <Input
        size="lg"
        variant="bordered"
        type="number"
        label={`You'll receive (max: ${numberWithCommas(balance_btc * price)} CLP)`}
        placeholder="0.00 CLP"
      />
      <Button
        color="warning"
        variant="shadow"
        className="text-base font-medium p-5"
        size="lg"
      >
        Sell
      </Button>
    </form>
  );
};

export default SellCard;
