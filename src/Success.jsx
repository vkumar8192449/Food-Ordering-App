import "./Success.css";
function Success(props) {
  return (
    <>
      {props.successloader === 1 ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div
          id="successdiv"
          style={{
            backgroundColor: props.successmsg[2],
            color: props.successmsg[3],
          }}
        >
          <h1>{props.successmsg[0]}</h1>
          <h3>{props.successmsg[1]}</h3>
        </div>
      )}
    </>
  );
}
export default Success;
