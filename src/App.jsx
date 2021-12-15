import "./App.scss";
import Nav from "./containers/Nav/Nav";
import ThemePicker from "./components/ThemePicker/ThemePicker";
import EventsList from "./containers/EventsList/EventsList";
import CreateEvent from "./containers/CreateEvent/CreateEvent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return <div className="App">
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<CreateEvent />} />
        <Route path="/events" element={<EventsList />} />
        <Route path="/orchestra" />
      </Routes>
    </Router>
    <ThemePicker />
  </div>;
};

export default App;
