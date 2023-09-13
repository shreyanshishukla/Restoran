import { Outlet, RouterProvider } from "react-router-dom";
import Menu from "./Components/Menubar/Menu";
import "./Styles/App.css";
import { useSelector } from "react-redux";
import Service from "./Components/Services/Service";
import Home from "./Components/Home/Home";
import { useRef } from "react";

function App() {
  const abt = useRef();
  return (
    <div className="mainapp">
      <Menu />

      <div className="App">
        <Outlet abt={abt} />
      </div>
    </div>
  );
}

export default App;
