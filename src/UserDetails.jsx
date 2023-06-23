import "./UserDetails.css";
function UserDetails() {
  return (
    <>
      <form id="userdetails">
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
        </div>
        <div>
          <label htmlFor="mob">Mobile Number</label>
          <input id="mob" type="text" />
        </div>
        <div>
          <label htmlFor="street">Street</label>
          <input id="street" type="text" />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input id="city" type="text" />
        </div>
        <div>
          <label htmlFor="code">Postal Code</label>
          <input id="code" type="text" />
        </div>
      </form>
    </>
  );
}
export default UserDetails;
