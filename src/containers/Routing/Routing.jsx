import { Routes, Route } from "react-router-dom";
import EventsList from "../EventsList/EventsList.jsx";
import CreateEvent from "../CreateEvent/CreateEvent";
import ResetPassword from "../../components/ResetPassword/ResetPassword";
import Login from "../Login/Login.jsx";
import ErrorPage from "../ErrorPage/ErrorPage.jsx";

const Routing = () => {
 return <>
    <Routes>
      <Route path="/create/event" element={<CreateEvent/>}/>
      <Route path="/" element={<EventsList />} />
      <Route path="*" element={<ErrorPage />} />
      
       {/* Temporary */}
       <Route path="/login" element={<Login />} />
       <Route path="/reset" element={<ResetPassword />} />
    </Routes>
 </>
}

export default Routing;