import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const FindQuery = () => {
  return (
    <div>
      <div className="flex justify-start items-center md:ml-[200px]">
        <Input
          placeholder="Ваш запрос"
          className="w-1/3 h-14 text-md border-2 border-slate-600"
        />
        <Button className="w-1/8 h-14 text-md border-2 border-slate-600">
          Найти
        </Button>
      </div>
    </div>
  );
};

export default FindQuery;
