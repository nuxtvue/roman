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
import { useRecoilState } from "recoil";
import { userAtom } from "@/recoil/atom/userAtom";

const LoginForm = ({ showLogin, setShowLogin }) => {
  const [loginFormData, setLoginFormData] = useState({});
  const [user, setUser] = useRecoilState(userAtom);
  const { toast } = useToast();
  const loginHandler = async () => {
    try {
      console.log(loginFormData);
      const res = await axios.post(
        "http://localhost:3000/api/user/login",
        loginFormData,
        { withCredentials: true }
      );
      console.log(res);
      if (res.data.success === true) {
        console.log(res);
        toast({
          variant: "default",
          title: "Вы успешно вошли на сайт",
          description: "Теперь вы можете пользоваться всеми возможностями",
        });
        setUser(res.data.user);
        setShowLogin(false);
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
      <Dialog open={showLogin} onOpenChange={setShowLogin}>
        <DialogContent className="sm:max-w-[425px] bg-black">
          <DialogHeader className="text-white">
            <DialogTitle>Логин пользователя</DialogTitle>
            <DialogDescription className="text-white">
              Форма Входа
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
                  setLoginFormData({
                    ...loginFormData,
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
                  setLoginFormData({
                    ...loginFormData,
                    password: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={loginHandler}>
              Войти
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginForm;
