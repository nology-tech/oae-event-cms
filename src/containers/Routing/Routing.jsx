import { Routes, Route } from "react-router-dom";
import EventsList from "../EventsList/EventsList.jsx";
import CreateEvent from "../CreateEvent/CreateEvent";
import ResetPassword from "../../components/ResetPassword/ResetPassword";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";

const Routing = () => {
  return <>
  <Routes>
    <Route path="/event/create" element={<CreateEvent/>}/>
    <Route path="/" element={<EventsList />} />
     {/* Temporary */}
     {/* <Route path="/login" element={<WelcomePage></WelcomePage>} */}
    <Route path="/reset" element= {<ResetPassword/>}/>
    <Route path="/forgot" element= {<ForgotPassword/>}/>
  </Routes>
</>
}

export default Routing;