import "../../Styles/Contact.css";
export default () => {
  return (
    <div className="contactconatiner">
      <div className="contatussmall">
        <div className="yellowbar"></div>
        <div className="contactussmalltext">Contact US</div>
        <div className="yellowbar"></div>
      </div>

      <div className="contactusforanyquery">Contact us for any query</div>
      <div className="subss">
        <div className="contactussubs">
          <div className="contactussub1">
            <div className="subtop">
              Booking
              <div className="yellowbar"></div>{" "}
            </div>
            <div className="subbottom">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0VvS_IafPWLSTwksZsptjomjFzQvDIC_72VI31MgfiaN6HvBtQ2Oc0L-wclWdcEubPmQ&usqp=CAU" />
              <div className="subbottomtext">book@example.com</div>
            </div>
          </div>
        </div>

        <div className="contactussubs">
          <div className="contactussub1">
            <div className="subtop">
              General
              <div className="yellowbar"></div>
            </div>
            <div className="subbottom">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0VvS_IafPWLSTwksZsptjomjFzQvDIC_72VI31MgfiaN6HvBtQ2Oc0L-wclWdcEubPmQ&usqp=CAU" />
              <div className="subbottomtext">book@example.com</div>
            </div>
          </div>
        </div>
        <div className="contactussubs">
          <div className="contactussub1">
            <div className="subtop">
              Technical
              <div className="yellowbar"></div>{" "}
            </div>
            <div className="subbottom">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0VvS_IafPWLSTwksZsptjomjFzQvDIC_72VI31MgfiaN6HvBtQ2Oc0L-wclWdcEubPmQ&usqp=CAU" />
              <div className="subbottomtext">book@example.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="leftmap">
          <img src="https://www.infinetsoft.com/Uploads/20170111101701google%20maps%20directions%20from%20current%20location.png" />
        </div>
        <div className="rightform">
          <form>
            <input
              placeholder="Your name?"
              className="inpt"
              type="text"
              required
            />
            <input
              placeholder="Your email?"
              className="inpt"
              type="text"
              required
            />
            <input
              placeholder="Subject"
              className="inptsub"
              type="text"
              required
            />
            <input placeholder="Message" className="msg" type="text" required />
            <br />
            <button>Send</button>{" "}
          </form>
        </div>
      </div>
    </div>
  );
};
