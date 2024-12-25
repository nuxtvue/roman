import { MdLogin } from "react-icons/md";
const TopMenu = () => {
  const handleClick = () => {};
  return (
    <div className="flex flex-row justify-between items-center gap-4 mt-4 mx-8 text-lg">
      <div className="flex flex-row gap-4">
        <div>Логотип</div>
        <div>Главная</div>
      </div>

      <div id="userSettings" className="flex gap-6">
        <div className="flex gap-2 items-center" onClick={handleClick}>
          <MdLogin />
          Вход
        </div>
        <div>Регистрация</div>
      </div>
    </div>
  );
};

export default TopMenu;
