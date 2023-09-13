export default ({ filterfood }) => {
  return (
    <div className="vegonly">
      <input
        type="radio"
        name="foodtype"
        value="Veg"
        onClick={() => filterfood(1)}
      />
      <label for="Veg" className="veg">
        Veg
      </label>
      <input
        type="radio"
        name="foodtype"
        value="NonVeg"
        onClick={() => filterfood(2)}
      />
      <label for="Non-veg" className="non-veg">
        NonVeg
      </label>
      <input
        type="radio"
        name="foodtype"
        value="All"
        onClick={() => filterfood(0)}
      />
      <label for="All" className="all">
        All
      </label>
    </div>
  );
};
