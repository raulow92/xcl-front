import { useState } from "react";
import { Input, Button } from "@nextui-org/react";

const BuyCard = () => {
  const [money, setMoney] = useState("");

  return (
    <form className="flex flex-col justify-center p-4 mx-auto w-full gap-4">
      <Input
        variant="bordered"
        type="number"
        label="Buy"
        placeholder="0.00 CLP"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
        startContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">$</span>
          </div>
        }
      />
      <Input
        variant="bordered"
        type="number"
        label="Receive"
        placeholder="0.00 BTC"
        startContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">$</span>
          </div>
        }
      />
      <Button
        color="warning"
        variant="shadow"
        className="text-base font-medium p-5"
      >
        Buy
      </Button>
    </form>
  );
};

export default BuyCard;
