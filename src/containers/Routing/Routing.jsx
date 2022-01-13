import { Routes, Route } from "react-router-dom";
import EventsList from "../EventsList/EventsList.jsx";
import CreateEvent from "../CreateEvent/CreateEvent";
import ResetPassword from "../../components/ResetPassword/ResetPassword";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";
import ErrorPage from "../ErrorPage/ErrorPage.jsx";

const Routing = () => {
 return <>
    <Routes>
      <Route path ="*" element={<ErrorPage/>}/>
      <Route path="/" element={<CreateEvent/>}/>
      <Route path="/events" element={<EventsList />} />
      <Route path="/orchestra" />
       {/* Temporary */}
      <Route path="/reset" element= {<ResetPassword/>}/>
      <Route path="/forgot" element= {<ForgotPassword/>}/>
    </Routes>
 </>
}

export default Routing;