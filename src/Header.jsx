import ViewCart from "./ViewCart.jsx";
import "./Header.css";
function Header(prop) {
  return (
    <>
      <div id="header">
        <h1 className="logo">ReactMeals</h1>
        <ViewCart
          setcartdisp={prop.setcartdisp}
          totalitems={prop.totalitems}
          newcost={prop.newcost}
        />
      </div>
    </>
  );
}
export default Header;
