import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Service from "../Components/Services/Service";
import Menu from "../Components/Menubar/Menu";
import FoodMenu from "../Components/FoodMenu/FoodMenu";

import App from "../App";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Cart from "../Components/Cart/Cart";
import BookATable from "../Components/BookATable/BookATable";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "Home",
        element: <Home />,
      },
      { path: "Service", element: <Service /> },
      {
        path: "Menu",
        element: <FoodMenu />,
        children: [
          {
            path: ":menu",
            element: <FoodMenu />,
          },
        ],
      },

      { path: "About", element: <About /> },
      { path: "Contact", element: <Contact /> },
      { path: "Cart", element: <Cart /> },
      { path: "BookATable", element: <BookATable /> },
    ],
  },
]);
