import { LuLayoutPanelTop } from "react-icons/lu";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="flex flex-col gap-2 h-screen">
      <Link to="/admin" className="flex items-center gap-2">
        <h1 className="text-2xl text-indigo-500 inline-flex justify-center gap-6 items-center p-2">
          <LuLayoutPanelTop />
          Панель
        </h1>
      </Link>
      <div className="flex flex-col items-center justify-start"></div>
    </div>
  );
};

export default AdminSidebar;
