import "./App.scss";
import Header from "./containers/Header/Header";
import Nav from "./containers/Nav/Nav";
import EventsList from "./containers/EventsList/EventsList";
import CreateEvent from "./containers/CreateEvent/CreateEvent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forms from "./containers/Forms/Forms";
import FormValidationTest from "./containers/Forms/FormValidationTest";

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
        </Routes>
      </Router>
      <FormValidationTest />
    </div>
  );
};

export default App;
