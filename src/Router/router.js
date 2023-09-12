import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Service from "../Components/Services/Service";
import Menu from "../Components/Menu";
import FoodMenu from "../Components/FoodMenu/FoodMenu";
import Food from "../Components/FoodMenu/Food";

import App from "../App";
import About from "../Components/About/About";
import Contact from "../Components/Contact";
import Cart from "../Components/Cart";
import BookATable from "../Components/BookATable/BookATable";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Home",
        element: <Home />,
        children: [
          {
            path: "About",
            element: <About />,
          },
        ],
      },
      { path: "Service", element: <Service /> },
      {
        path: "Menu",
        element: <FoodMenu />,
        children: [
          {
            path: ":options",
            element: <Food />,
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
