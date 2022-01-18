import "./App.scss";
import Header from "./containers/Header/Header";
import Routing from "./containers/Routing/Routing";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react';

const App = () => {
  const [logoutButton, setLogoutButton] = useState(false)

  const toggleLogoutButton = () => {
    setLogoutButton(!logoutButton)
  }

  return (
    <div className="App">
      <Router>
        <Header logoutButton={logoutButton} toggleLogoutButton={toggleLogoutButton} />

        <Routing toggleLogoutButton={toggleLogoutButton} />
      </Router>
    </div>
  );
};

export default App;
