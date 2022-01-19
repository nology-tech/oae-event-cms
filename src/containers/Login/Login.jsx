import React from "react";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";
import ResetPassword from "../../components/ResetPassword/ResetPassword";
import WelcomePage from "../../components/WelcomePage/WelcomePage";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsList from "../EventsList/EventsList";
export const Login = () => {



  // const [step, setStep] = useState(0);

  // const incrementStep = () => {
  //   setStep(step + 1);
  // };

  // const mainPage = () => {
  //   setStep(3);
  // };

  return (

    <WelcomePage />
    //  <Router>
      
    //     <AuthProvider>
    //       <Routes>
    //         {/* <Route path="/welcome" element={<WelcomePage/>}/>
    //         <Route path="/forgot-password" element={<ForgotPassword/>}/>
    //         <Route path="/resetPassword" element={<ResetPassword/>}/>
    //         <Route path="/" element={<EventsList />}/>  */}

    //       </Routes>
    //    </AuthProvider> 
    //  </Router> 


  




    // <AuthProvider>
    //   <div className="Login">
    //     {step === 0 ? (
    //       <WelcomePage handleNext={incrementStep} handleSubmit={mainPage} />
    //     ) : null}
    //     {step === 1 ? <ForgotPassword handleNext={incrementStep} /> : null}
    //     {step === 2 ? <ResetPassword /> : null}
    //     {step === 3 ? <Navigate to="/" /> : null}
    //   </div>
    // </AuthProvider>
  );
};

export default Login;
