import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProfileView from "./pages/Profile";
import ListUser from "./components/ListUser";
import ScheduleCard from "./pages/ScheduleCard";
import EditProfile from "./pages/EditProfile";
import HelpSupport from "./pages/HelpSupport";
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";
export default function Router() {
  return (
    <>
      <Toaster /> {/* Aquí se renderizan los toasts en cualquier parte de la app */}
      <BrowserRouter>
        <Routes>
          <Route element={<NavBar />} />
          <Route index={true} path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/view-list-users" element={<ListUser />} />
          <Route path="/view-orders-user" element={<ScheduleCard />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/help-support" element={<HelpSupport />} />
           {/* 
            <Route path="/admin-user" element={<UserAdmin />} />
           */}
         
        </Routes>
      </BrowserRouter>
    </>
  );
}
