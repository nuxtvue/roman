import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { useRecoilState } from "recoil";
import { userAtom } from "@/recoil/atom/userAtom";

const AdminLayout = () => {
  const [user, setUser] = useRecoilState(userAtom);

  if (user?.role !== "admin") {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Доступ запрещен</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-wrap  ">
      <div className="w-[230px] hidden md:block bg-neutral-600 bg-opacity-50 color-black">
        <AdminSidebar />
      </div>
      <hr className="w-[1px] border border-blue-900  h-screen" />
      <div className="md:flex-1 flex bg-muted-50 p-6 md:px-8 md:py-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
