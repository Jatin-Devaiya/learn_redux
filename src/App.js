import { useDispatch, useSelector } from "react-redux";
import { decnummber,decnum,incnum, incnummber } from "./actions";


function App() {
  const mystate = useSelector((state)=> state.changthenumber)
  const dispatch = useDispatch()
  return (
    <>
    <center>
     <h1>Increment / Decriment Counter</h1>
     <p>Using React && Redux</p>

     <div>
      <button onClick={()=>dispatch(decnummber())}>-</button>
      <span> {mystate} </span>
      <button onClick={()=>dispatch(incnummber())}>+</button>
     </div> 
      </center>
    </>
  );
}

export default App;
  