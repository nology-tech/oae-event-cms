import "./App.scss";
import Header from "./containers/Header/Header";
import Nav from "./containers/Nav/Nav";
import Routing from "./containers/Routing/Routing";
import { BrowserRouter as Router } from "react-router-dom";
import ResetPassword from "./components/ResetPassword/ResetPassword";

const App = () => {
  return (
    <div className="App">
     <Router>
        <Header />
        <Nav />
        <Routing />
      </Router>
      </div>
  );
};

export default App;
