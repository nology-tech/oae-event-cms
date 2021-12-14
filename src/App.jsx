import "./App.scss";
import Nav from "./containers/Nav/Nav";
import EventsList from "./containers/EventsList/EventsList";
// import CreateEvent from "./containers/CreateEvent/CreateEvent";
import CreateEvent from "./containers/CreateEvent/CreateEvent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return <div className="App">


    <Router>
      <Nav />
  
      <Routes>
        <Route path="/" element={<CreateEvent />}/>
        <Route path="/events" element={<EventsList />} />
        <Route path="/orchestra"/>
      </Routes>
    </Router>


  </div>;
};

export default App;
