import HomePage from "@/pages/HomePage";

import { Route, Routes } from "react-router-dom";
import AdminLayout from "./admin/AdminLayout";
import PanelPage from "@/pages/admin/PanelPage";
import UsersPage from "@/pages/admin/UsersPage";
const RoutesMain = () => {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />

        <Route path="/admin/" element={<AdminLayout />}>
          <Route index element={<PanelPage />} />
          <Route path="users" element={<UsersPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default RoutesMain;
