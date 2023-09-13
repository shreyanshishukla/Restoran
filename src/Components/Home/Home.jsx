import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../../Styles/Home.css";
import { useRef } from "react";
import About from "../About/About";

export default ({ abt }) => {
  const navigate = useNavigate();
  const arr = [];
  for (let i = 0; i < 63; i++) arr.push(i);
  const ref = useRef();
  return (
    <>
      <div className="home">
        <div className="home-text">
          <div className="home-text-heading">Enjoy Our Delicious Meal</div>
          <div className="home-text-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            enim quos cum officia aliquam perspiciatis molestiae delectus
            reiciendis, corrupti provident excepturi facere blanditiis rerum ex
            ducimus similique vero odit non.
          </div>
          <button
            className="btn-bookatable"
            onClick={() => {
              navigate("/BookATable");
            }}
          >
            Book A Table
          </button>
        </div>
        <div className="home-image">
          <img src="./platenew.png"></img>
        </div>
      </div>
      <div className="splash" ref={ref}>
        {arr.map((a) => (
          <div className="splashkid"></div>
        ))}
      </div>
      <div className="pchild">
        <button className="slider">left</button>
        <img src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" />
        <img src="https://images.unsplash.com/photo-1651978595416-9956a5fb8f7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxyZXN0dXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" />
        <img src=" https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDE1fHxyZXN0dXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" />

        <img src=" https://plus.unsplash.com/premium_photo-1680292890588-40ab5cda2bcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxyZXN0dXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" />
        <img src="https://images.unsplash.com/photo-1668533889350-21a05111310b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxyZXN0dXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" />
        <button className="slider">right</button>
      </div>
      <Outlet abt={abt} />
      <div className="parallex">
        <div className="parachild">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, rem
          facilis! Error, nisi molestias! Voluptas commodi ratione eum quidem
          necessitatibus ipsa sint assumenda quasi repellendus, quod nam
          pariatur impedit sunt? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quasi, rem facilis! Error, nisi molestias! Voluptas
          commodi ratione eum quidem necessitatibus ipsa sint assumenda quasi
          repellendus, quod nam pariatur impedit sunt?Lorem ipsum dolor sit amet
          cas commodi ratione eum quidem necessitatibus ipsa sint assumenda
          quasi repellendus, quod nam pariatur impedit sunt?Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quasi, rem facilis! Error, nisi
          molestias! Voluptas commodi ratione eum quidem necessitatibus ipsa
          sint assumenda quasi ssumenda?
        </div>
      </div>
      <div className="footer">
        <div className="ffooter">
          <NavLink to="/menu" className="navlink">
            Order-now
          </NavLink>
        </div>
      </div>
    </>
  );
};
