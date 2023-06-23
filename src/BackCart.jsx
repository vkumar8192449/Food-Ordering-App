import "./BackCart.css";
function BackCart(prop) {
  function closecart() {
    prop.setcartdisp("none");
  }
  return (
    <>
      <div
        id="backmodel"
        style={{ display: prop.cartdisp }}
        onClick={closecart}
      ></div>
    </>
  );
}
export default BackCart;
