import "./App.scss";
import Header from "./containers/Header/Header";
import EventsList from "./containers/EventsList/EventsList";
import CreateEvent from "./containers/CreateEvent/CreateEvent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResetPassword from "./components/ResetPassword/ResetPassword";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CreateEvent />} />
          <Route path="/events" element={<EventsList />} />
          <Route path="/orchestra" />
          
          {/* Temporary */}
          <Route path="/reset" element={<ResetPassword />} />
        </Routes>
      </Router>
      </div>
  );
};

export default App;
