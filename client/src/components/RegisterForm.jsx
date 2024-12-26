import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RegisterForm = ({ showRegister, setShowRegister }) => {
  return (
    <div>
      <Dialog open={showRegister} onOpenChange={setShowRegister}>
        <DialogContent className="sm:max-w-[425px] bg-black">
          <DialogHeader className="text-white">
            <DialogTitle>Регистрация пользователя</DialogTitle>
            <DialogDescription className="text-white">
              Форма регистрации нового пользователя
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Ваш Email
              </Label>
              <Input id="email" placeholder="Email" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Пароль
              </Label>
              <Input id="username" placeholder="*****" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Сохранить изменения</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegisterForm;
