import "./GrandTotal.css";
function GrandTotal(prop) {
  function userdetails() {
    if (prop.userdetails !== "none") {
      prop.validateuserdetails();
    } else {
      prop.setuserdetails("flex");
    }
  }

  return (
    <>
      <div id="gtotal">
        <h2>Total Amount</h2>
        <h2>₹{prop.totalcost.toPrecision(4)}</h2>
      </div>
      <div id="gtotalrow2">
        <button
          onClick={() => {
            if (prop.userdetails !== "none") {
              prop.setuserdetails("none");
            } else {
              prop.setcartdisp("none");
            }
          }}
        >
          {prop.userdetails === "none" ? "Close" : "Back"}
        </button>
        <button onClick={userdetails}>
          {prop.userdetails === "none" ? "Order" : "Confirm Order"}
        </button>
      </div>
    </>
  );
}
export default GrandTotal;
