import { useDispatch, useSelector } from "react-redux";

export default () => {
  const cartitems = useSelector((d) => d.cart);
  const dispatcher = useDispatch();
  return { cartitems, dispatcher };
};
