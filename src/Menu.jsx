import "./Menu.css";
import Item from "./Item.jsx";

function Menu(prop) {
  const fff = prop.allmeals ? prop.allmeals : [];
  return (
    <>
      <div id="itemlist">
        {fff.map((value, index) => (
          <Item
            key={index}
            index={index}
            dishname={value.dishname}
            desc={value.desc}
            price={value.price}
            quantity={value.quantity}
            addtoorder={prop.addtoorder}
            orders={prop.orders}
            settotalitems={prop.settotalitems}
            totalitems={prop.totalitems}
          />
        ))}
      </div>
    </>
  );
}
export default Menu;
