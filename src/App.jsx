import "./App.scss";
import Header from "./containers/Header/Header";
import Nav from "./containers/Nav/Nav";
// import EventsList from "./containers/EventsList/EventsList";
// import CreateEvent from "./containers/CreateEvent/CreateEvent";

import Forms from "./containers/Forms/Forms";
import FormValidationTest from "./containers/Forms/FormValidationTest";
import Routing from "./containers/Routing/Routing";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Nav />
        <Routing />
      </Router>
      <FormValidationTest />
      <Forms />
    </div>
  );
};

export default App;