import { Routes, Route } from "react-router-dom";
import EventsList from "../EventsList/EventsList.jsx";
import CreateEvent from "../CreateEvent/CreateEvent";

const Routing = () => {
 return <>
    <Routes>
      <Route path="/" element={<CreateEvent/>}/>
      <Route path="/events" element={<EventsList />} />
      <Route path="/orchestra" />
    </Routes>
 </>
}

export default Routing;