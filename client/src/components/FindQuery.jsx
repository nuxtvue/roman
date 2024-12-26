import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const FindQuery = () => {
  const [queryGiga, setQueryGiga] = useState("");
  const senQueryHandler = () => {};
  return (
    <div>
      <div className="flex flex-col gap-4 mx-10">
        <div className="flex gap-2">
          <Input
            type="text"
            onChange={(e) => setQueryGiga(e.target.value)}
            placeholder="Ваш запрос"
            className="w-1/3 h-14 text-md border-2 border-slate-600"
          />
          <Button
            className="w-1/8 h-14 text-md border-2 border-slate-600"
            onClick={senQueryHandler}
          >
            Найти11
          </Button>
        </div>
        <div className=" bg-slate-950 w-1/3 h-auto">
          {queryGiga && (
            <div>
              <span className="text-lg font-bold">Вы ввели запрос :</span>{" "}
              {queryGiga}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindQuery;
