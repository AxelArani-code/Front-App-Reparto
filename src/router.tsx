
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./view/Home";
import Login from "./view/Login";
import ProfileView from "./view/Profile";

import ListUser from "./components/ListUser";
import ScheduleCard from "./view/ScheduleCard";
import EditProfile from "./view/EditProfile";
import HelpSupport from "./view/HelpSupport";
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
