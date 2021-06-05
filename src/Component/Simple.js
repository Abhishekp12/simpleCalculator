import React from 'react';
import './Simple.css'

const Simple = () => {


  return (
    <>
    <div className="calc">
      <div className="inputfield">
        <input type="text" />
      </div>
      <div className="button-area">
     <button className="ac" value=" AC"  >AC </button>
     <button className="ac" value=" C"  >C </button>
     <button  className="prcnt" value=" %"  > % </button>

     <button className="btnstyle " value=" 7"  >7 </button>
     <button  className="btnstyle " value=" 8"  >8 </button>
     <button v className="btnstyle "alue=" 9"  >9 </button>
     <button  className="btnstyle " value=" /"  >/ </button>

     <button  className="btnstyle "  value=" 4"  >4 </button>
     <button  className="btnstyle "  value=" 5"  >5 </button>
     <button className="btnstyle "  value=" 6"  >6 </button>
     <button  className="btnstyle "  value=" *"  >* </button>

     <button  className="btnstyle "  value=" 1"  >1 </button>
     <button  className="btnstyle "  value=" 2"  >2 </button>
     <button  className="btnstyle "  value=" 3"  >3 </button>
     <button  className="btnstyle "  value=" -"  >- </button>

     <button  className="btnstyle " value=" 0"  >0 </button>
     <button  className="btnstyle " value=" ."  >. </button>
     <button  className="btnstyle " value=" ="  >=</button>
     <button  className="btnstyle " alue=" +"  >+</button>

      </div>
      
    
    <div className="head">
      <h3>Simple Calculator </h3>
    </div>
    </div>
  </>
  )
  
}

export default Simple

