import { useState } from "react";
import { Input, Button } from "@nextui-org/react";

const SellCard = () => {
  const [money, setMoney] = useState("");

  return (
    <form className="flex flex-col justify-center p-4 mx-auto w-full gap-4">
      <Input
        variant="bordered"
        type="number"
        label="Venderás"
        placeholder="0.00"
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
        label="Recibirás"
        placeholder="0.00 CLP"
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
        Vender
      </Button>
    </form>
  );
};

export default SellCard;