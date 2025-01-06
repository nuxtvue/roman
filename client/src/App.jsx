import { Toaster } from "@/components/ui/toaster";
import { Route, Routes } from "react-router-dom";
import PanelPage from "./pages/admin/PanelPage";
import AdminLayout from "./components/admin/AdminLayout";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/admin/UsersPage";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />

        <Route path="/admin/" element={<AdminLayout />}>
          <Route index element={<PanelPage />} />
          <Route path="users" element={<UsersPage />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
