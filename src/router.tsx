
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./view/Home";
import Login from "./view/Login";
import ProfileView from "./view/Profile";

import ListUser from "./components/ListUser";
import ScheduleCard from "./view/ScheduleCard";
import EditProfile from "./view/EditProfile";

export default function router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile" element={<ProfileView/>}></Route>
        <Route path="/viewListUsers" element={<ListUser/>} ></Route>
        <Route path="/viewOrdersUser" element={<ScheduleCard/>} ></Route>
        <Route path="/EditProfile" element={<EditProfile/>} ></Route>

    </Routes>
    </BrowserRouter>
  )
}
