import "./CartItem.css";
function CartItem(props) {
  function decrement() {
    if (props.orders[props.index].quantity === 1) {
      var temparr = props.orders;
      temparr.splice(props.index, 1);
      props.addtoorder(temparr);
    } else {
      props.orders[props.index].quantity =
        props.orders[props.index].quantity - +1;
    }
    props.refreshcomp(-1);
  }
  function increment() {
    props.orders[props.index].quantity =
      +props.orders[props.index].quantity + +1;
    props.refreshcomp(1);
  }
  return (
    <>
      <div id="cartitem">
        <div id="leftcartitem">
          <p>{props.dishname}</p>
          <div id="pricequan">
            <span className="price">₹{props.price}</span>
            <span>x{props.quantity}</span>
          </div>
        </div>
        <div id="rightcartitem">
          <button onClick={decrement}>
            <span className="material-symbols-outlined">remove</span>
          </button>
          <button onClick={increment}>
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </div>
    </>
  );
}
export default CartItem;
