import { Routes, Route } from "react-router-dom";
import EventsList from "../EventsList/EventsList.jsx";
import CreateEvent from "../CreateEvent/CreateEvent";
import ResetPassword from "../../components/ResetPassword/ResetPassword";

const Routing = () => {
 return <>
    <Routes>
      <Route path="/" element={<CreateEvent/>}/>
      <Route path="/events" element={<EventsList />} />
      <Route path="/orchestra" />
       {/* Temporary */}
       <Route path="/reset" element={<ResetPassword />} />
    </Routes>
 </>
}

export default Routing;