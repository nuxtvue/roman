import { Button } from "@/components/ui/button";
import axios from "axios";

import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const RegisterForm = ({ showRegister, setShowRegister }) => {
  const [registerFormData, setRegisterFormData] = useState({});
  const { toast } = useToast();
  const registerHandler = async () => {
    try {
      console.log(registerFormData);
      const res = await axios.post(
        import.meta.env.VITE_SERVER_DOMAIN + "/api/user/register",
        registerFormData
      );
      console.log(res);
      if (res.data.success === true) {
        console.log(res);
        toast({
          variant: "default",
          title: "Вы успешно зарегистрировались",
          description: "There was a problem with your request.",
        });
        setShowRegister(false);
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "ОШИБКА",
        description: error.response.data.message,
      });
    }
  };
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
              <Input
                id="email"
                placeholder="Email"
                className="col-span-3"
                onChange={(e) =>
                  setRegisterFormData({
                    ...registerFormData,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Пароль
              </Label>
              <Input
                id="username"
                placeholder="*****"
                className="col-span-3"
                onChange={(e) =>
                  setRegisterFormData({
                    ...registerFormData,
                    password: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={registerHandler}>
              Зарегистрироваться
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegisterForm;
