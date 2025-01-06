import { LuLayoutPanelTop } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="flex flex-col gap-2 h-screen">
      <Link to="/admin" className="flex items-center gap-2">
        <h1 className="text-2xl text-indigo-500 inline-flex justify-center gap-6 items-center p-2">
          <LuLayoutPanelTop />
          Панель
        </h1>
      </Link>
      <div className="flex flex-col items-center justify-start group">
        <Link
          to="/admin/users"
          className="text-lg text-indigo-200 hover:text-indigo-300 flex items-center gap-2 group-hover:text-white
           group-hover:bg-indigo-500 group-hover:rounded-md group-hover:p-2 transition-all duration-300"
        >
          <FaUsers />
          Пользователи
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
