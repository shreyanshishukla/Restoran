import { useEffect, useState } from "react";

export default () => {
  const [name, setName] = useState();
  const [email, setemail] = useState();
  const [DT, setDT] = useState();
  const [NOP, setNOP] = useState();
  const [specialReq, setspecialReq] = useState();

  const printData = () => {
    console.log(name, email, DT, NOP, specialReq);
  };
  return (
    <div className="bookatableform">
      <div className="form-heading">
        <div className="form-heading-small">
          <h3>Reservation</h3> <div className="horibar"></div>
        </div>
        <div className="form-heading-large">
          <h1>Book A Table</h1>
        </div>
        <div className="form-bookatable">
          <form>
            <div className="outerflexform">
              <div className="innerflexform">
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className="inputfield"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />

                <input
                  required
                  type="email"
                  placeholder="Your Email"
                  className="inputfield"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
                <input
                  required
                  type="date"
                  placeholder="Date/Time"
                  className="inputfield"
                  onChange={(e) => {
                    setDT(e.target.value);
                  }}
                />
                <input
                  required
                  type="number"
                  placeholder="Number of People"
                  defaultValue={1}
                  className="inputfield"
                  onChange={(e) => {
                    setNOP(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Special Request"
                  className="inputfield textbox"
                  onChange={(e) => {
                    setspecialReq(e.target.value);
                  }}
                />
              </div>
              <button className="btn-bat" onClick={printData}>
                Book Table
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
