import "./App.css";
import { Fotter } from "./components/public/Fotter";
import Main from "./components/public/Main"; //no tiene llaves porque es un component de clase y no un functional component
import { Navbar } from "./components/public/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Detail } from "./components/public/Detail";
import { UserForm } from "./components/public/UserForm";

function App() {
  return (
      <div>
      <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Main/>}  ></Route>
          <Route exact path="/user-form" element={<UserForm />}  ></Route>
          <Route exact path="/detail/:id" element={<Detail />}  ></Route>
      </Routes>
      </Router>

      <Fotter />
      </div>
  );
}

export default App;
