import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Userstable from "./components/Userstable.jsx";
import Dashboard from "./components/Dashboard.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn/>} />
          <Route path="/SignUp" element= {<SignUp/>} />
          <Route path="/users" element= {<Dashboard/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
