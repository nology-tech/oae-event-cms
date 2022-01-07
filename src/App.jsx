import "./App.scss";
import Header from "./containers/Header/Header";
import Nav from "./containers/Nav/Nav";
import EventsList from "./containers/EventsList/EventsList";
import CreateEvent from "./containers/CreateEvent/CreateEvent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<CreateEvent />} />
          <Route path="/events" element={<EventsList />} />
          <Route path="/orchestra" />
          
          {/* Temporary */}
          <Route path="/reset" element= {<ResetPassword/>}/>
          <Route path="/forgot" element= {<ForgotPassword/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
