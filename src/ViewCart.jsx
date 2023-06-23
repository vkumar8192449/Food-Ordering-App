import "./ViewCart.css";
function ViewCart(prop) {
  function showcart() {
    prop.newcost();
    prop.setcartdisp("block");
  }
  return (
    <>
      <div id="cartcontainer" onClick={showcart}>
        <span className="material-symbols-outlined">
          shopping_cart<p id="mobcartvalue">{prop.totalitems}</p>
        </span>
        <h3>Your Cart</h3>
        <h3 id="cartvalue">{prop.totalitems}</h3>
      </div>
    </>
  );
}
export default ViewCart;
