import "./App.scss";
import Header from "./containers/Header/Header";
import Routing from "./containers/Routing/Routing";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
     <Router>
      <Header/>
        {/* <Nav /> */}
        <Routing />
      </Router>
      </div>
  );
};

export default App;