import { useState } from "react";
import "./Item.css";
function Item(props) {
  const [curquan, setquan] = useState(1);
  function quantitychanged() {
    let tp = document.getElementById(`quanper${props.index}`).value;
    setquan(tp);
  }
  function addtoorder() {
    var result = props.orders.find((item) => item.id === props.index);
    if (result) {
      props.orders.forEach((i) => {
        if (i.id === props.index) {
          i.quantity = +i.quantity + +curquan;
          return;
        }
      });
    } else {
      props.addtoorder([
        ...props.orders,
        {
          id: props.index,
          dishname: props.dishname,
          price: props.price,
          quantity: curquan,
        },
      ]);
    }
    document.getElementById(`quanper${props.index}`).value = 1;
    props.settotalitems(props.totalitems + +curquan);
  }
  return (
    <>
      <div id="item">
        <div id="leftmenu">
          <h3 className="dishname">{props.dishname}</h3>
          <p className="description">{props.desc}</p>
          <h3 className="price">₹{props.price}</h3>
        </div>
        <div id="rightmenu">
          <div className="quantity">
            <h4>Quantity</h4>
            <input
              id={`quanper${props.index}`}
              type="number"
              className="inputnumber"
              min={1}
              defaultValue={props.quantity}
              onChange={quantitychanged}
            />
          </div>
          <button id="addbtn" onClick={addtoorder}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}
export default Item;
