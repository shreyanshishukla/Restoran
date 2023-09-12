import "../../Styles/Bookatable.css";
import BookATableForm from "./BookATableForm";
export default () => {
  return (
    <>
      <div className="BAT">
        <div className="Bookatable">
          <div className="video">
            <iframe
              width="600"
              height="590"
              src="https://www.youtube.com/embed/xPPLbEFbCAo?si=lVuT9h3Nw_YJ26XY"
            ></iframe>
          </div>
          <BookATableForm />
        </div>
      </div>
    </>
  );
};
