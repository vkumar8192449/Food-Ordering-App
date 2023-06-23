import './App.css';
import Header from './Header.jsx';
import BackWall from './BackWall.jsx';
import Banner from './Banner.jsx';
import Menu from './Menu.jsx';
import BackCart from './BackCart.jsx';
import FrontCart from './FrontCart.jsx';
import Success from './Success';
import { useEffect, useState } from 'react';
import AllMeals from './AllMeals.json';

function App() {
  const [allmeals, setallmeals] = useState([]);
  const [isloading, setisloading] = useState(true);
  const [iserror, seterror] = useState(true);
  useEffect(() => {
    // const fetching = async () => {
    //   const data = await require('./AllMeals.json');
    //   setallmeals(data);
    //   if (data === null) {
    //     seterror(true);
    //   }
    //   setisloading(false);
    // }
    // fetching();
    // const fetching = () => {
    setallmeals(AllMeals.AllMeals);
    setisloading(false);
    seterror(false);

    // }
    // const check = () => {
    //   if (allmeals.length === 0) {
    //     seterror(true);
    //   }
    // }
    // fetching();
    // check();
  }, []);

  const [cartdisp, setcartdisp] = useState('none');
  const [orders, addtoorder] = useState([]);
  const [totalitems, settotalitems] = useState(0);
  const [totalcost, settotalcost] = useState(0);
  function newcost() {
    var amt = 0;
    orders.forEach((i) => {
      amt = +amt + +i.price * +i.quantity;
    });
    settotalcost(amt);
  }

  const [successloader, setsuccess] = useState(0);
  const [successmsg, setsuccessmsg] = useState(["Order Placed Successfully!!!", "Thanks For Ordering...", "#d4edda", "#155724"]);
  function emptycart(code) {
    if (code === 1) {
      setsuccess(1);
      setcartdisp('none');
      setTimeout(function () {
        setsuccess(2);
        addtoorder([]);
        settotalitems(0);
        settotalcost(0);
      }, 3000);
      setTimeout(function () {
        setsuccess(0);
      }, 5000);
    }
    else {
      setsuccessmsg(["Error in Placing Order!!!", "Try Again In Some Time...", "#f8d7da", "#491217"]);
      setsuccess(1);
      setcartdisp('none');
      setTimeout(function () {
        setsuccess(2);
      }, 3000);
      setTimeout(function () {
        setsuccess(0);
        setsuccessmsg(["Order Placed Successfully!!!", "Thanks For Ordering...", "#d4edda", "#155724"]);

      }, 6000);
    }
  }

  return (
    <>
      <Header setcartdisp={setcartdisp} totalitems={totalitems} newcost={newcost} />
      <BackWall />
      <Banner />
      {
        (!isloading && !iserror) ? <Menu allmeals={allmeals} addtoorder={addtoorder} orders={orders} settotalitems={settotalitems} totalitems={totalitems} /> : ((iserror) ? <p className='loading'>Error in Fetching Meals</p> : <p className='loading'>Loading...</p>)
      }
      <BackCart cartdisp={cartdisp} setcartdisp={setcartdisp} />
      <FrontCart settotalitems={settotalitems} newcost={newcost} totalcost={totalcost} orders={orders} addtoorder={addtoorder} cartdisp={cartdisp} setcartdisp={setcartdisp} totalitems={totalitems} emptycart={emptycart} />
      {(successloader !== 0) ? <>
        <BackCart cartdisp="true" setcartdisp={setcartdisp} /><Success successloader={successloader} successmsg={successmsg} /></> : <></>}
    </>
  );
}
export default App;
