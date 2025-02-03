import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Profile from "./view/Profile";
import Login from "./view/Login";
import ScheduleCard from "./view/ScheduleCard";


export default function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/scheduleCard" element={<ScheduleCard />} />
      </Routes>
    </Router>
  )
}
