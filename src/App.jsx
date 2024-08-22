import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppContextProvider from "./context/AppContext";
function App() {


  return (
    <>
      <ToastContainer />
      <AppContextProvider>
        <Router>
          <Routes />
        </Router>
      </AppContextProvider>
    </>

  );
}
export default App;