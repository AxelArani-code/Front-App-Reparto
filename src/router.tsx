
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./view/Home";
import Login from "./view/Login";
import ProfileView from "./view/Profile";
import CustomEdit from "./components/CustomEdit";
import ListUser from "./components/ListUser";

export default function router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile" element={<ProfileView/>}></Route>
        <Route path="/viewComponet" element={<ListUser/>} ></Route>

    </Routes>
    </BrowserRouter>
  )
}
