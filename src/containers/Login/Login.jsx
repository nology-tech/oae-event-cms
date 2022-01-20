import React from "react";

import WelcomePage from "../../components/WelcomePage/WelcomePage";

export const Login = (props) => {

  return (
    <WelcomePage setUser={props.setUser} />
  );
};

export default Login;
