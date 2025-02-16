
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProfileView from "./pages/Profile";

import ListUser from "./components/ListUser";
import ScheduleCard from "./pages/ScheduleCard";
import EditProfile from "./pages/EditProfile";
import HelpSupport from "./pages/HelpSupport";
import NavBar from "./components/NavBar";

export default function router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<NavBar/>}>

      </Route>
      
     <Route  index={true}  path="/" element={<Home/>}></Route>     
        <Route  path="/login" element={<Login/>}></Route>
        <Route path="/profile" element={<ProfileView/>}></Route>
        <Route path="/view-list-users" element={<ListUser/>} ></Route>
        <Route path="/view-orders-user" element={<ScheduleCard/>} ></Route>
        <Route path="/edit-profile" element={<EditProfile/>} ></Route>
        <Route path="/help-support" element={<HelpSupport/>} ></Route>

    </Routes>
    </BrowserRouter>
  )
}
