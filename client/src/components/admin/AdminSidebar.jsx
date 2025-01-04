import { LuLayoutPanelTop } from "react-icons/lu";
import { Link } from "react-router-dom";
import { TbLogs } from "react-icons/tb";
import { FiPlusCircle } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

const AdminSidebar = () => {
  return (
    <div className="flex flex-col gap-2 h-screen">
      <Link to="/admin" className="flex items-center gap-2">
        <h1 className="text-2xl text-indigo-500 inline-flex justify-center gap-6 items-center">
          <LuLayoutPanelTop />
          Панель
        </h1>
      </Link>
      <div className="flex flex-col items-center justify-start">
        <Link
          to="/admin/users"
          className="inline-flex justify-start gap-2 items-center hover:bg-gray-50 w-full p-2 rounded-md hover:font-semibold hover:px-4 transition-all duration-300 text-lg"
        >
          <FaUsers className="text-xl text-gray-600" />
          Пользователи
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
