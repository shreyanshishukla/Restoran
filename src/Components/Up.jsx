import "../Styles/Foodmenu.css";
export default () => {
  return (
    <button
      className="up"
      onClick={() => {
        window.scrollTo({
          top: "0",
          behavior: "smooth",
        });
      }}
    >
      ⬆
    </button>
  );
};
