import "./FrontCart.css";
import CartItem from "./CartItem.jsx";
import GrandTotal from "./GrandTotal.jsx";
import UserDetails from "./UserDetails.jsx";
import { useState } from "react";

function FrontCart(props) {
  function placeorder() {
    var ord = {
      UserDetails: {
        Name: document.getElementById("name").value,
        Mobile: document.getElementById("mob").value,
        Street: document.getElementById("street").value,
        City: document.getElementById("city").value,
        PostalCode: document.getElementById("code").value,
      },
      order: props.orders,
      TotalAmount: props.totalcost.toPrecision(4),
    };
    fetch("https://react-meals-e4257-default-rtdb.firebaseio.com/Orders.json", {
      method: "POST",
      body: JSON.stringify(ord),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((res) => {
        setuserdetails("none");
        props.emptycart(1);
      })
      .catch(() => {
        props.emptycart(0);
      });
  }

  const [userdetails, setuserdetails] = useState("none");
  function validateuserdetails() {
    var points = 5;
    if (document.getElementById("name").value.length < 3) {
      document.getElementById("name").style.borderBottomColor = "brown";
      points--;
    } else {
      document.getElementById("name").style.borderBottomColor = "black";
    }
    if (document.getElementById("mob").value.length < 10) {
      document.getElementById("mob").style.borderBottomColor = "brown";
      points--;
    } else {
      document.getElementById("mob").style.borderBottomColor = "black";
    }
    if (document.getElementById("street").value.length < 5) {
      document.getElementById("street").style.borderBottomColor = "brown";
      points--;
    } else {
      document.getElementById("street").style.borderBottomColor = "black";
    }
    if (document.getElementById("city").value.length < 3) {
      document.getElementById("city").style.borderBottomColor = "brown";
      points--;
    } else {
      document.getElementById("city").style.borderBottomColor = "black";
    }
    if (document.getElementById("code").value.length !== 6) {
      document.getElementById("code").style.borderBottomColor = "brown";
      points--;
    } else {
      document.getElementById("code").style.borderBottomColor = "black";
    }
    if (points === 5) {
      placeorder();
    }
  }

  function refreshcomp(val) {
    props.addtoorder([...props.orders]);
    props.newcost();
    props.settotalitems(+props.totalitems + +val);
  }
  return (
    <>
      <div id="cartmaindiv" style={{ display: props.cartdisp }}>
        {userdetails === "none" ? (
          props.orders.length > 0 ? (
            props.orders.map((value, index) => (
              <CartItem
                key={index}
                index={index}
                dishname={value.dishname}
                price={value.price}
                quantity={value.quantity}
                orders={props.orders}
                refreshcomp={refreshcomp}
                addtoorder={props.addtoorder}
              />
            ))
          ) : (
            <h2
              id="emptyacart"
              style={{ textAlign: "center", fontStyle: "italic" }}
            >
              Cart is Empty !!!
            </h2>
          )
        ) : (
          <UserDetails />
        )}

        {props.orders.length > 0 ? (
          <GrandTotal
            totalcost={props.totalcost}
            setcartdisp={props.setcartdisp}
            setuserdetails={setuserdetails}
            userdetails={userdetails}
            validateuserdetails={validateuserdetails}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
export default FrontCart;
