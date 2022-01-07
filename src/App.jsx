import "./App.scss";
import Header from "./containers/Header/Header";
import EventsList from "./containers/EventsList/EventsList";
import CreateEvent from "./containers/CreateEvent/CreateEvent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageOne from "./components/EventInfoForm/PageOne/PageOne";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CreateEvent />} />
          <Route path="/events" element={<EventsList />} />
          <Route path="/orchestra" />
        </Routes>
      </Router>
      <PageOne/>
      </div>
  );
};

export default App;
