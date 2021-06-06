import React, { useState, useEffect, useRef } from "react";
import './Simple.css';

function Fun() {
  const [result, setResult] = useState("  ");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className="calc">
      <from  className="inputfield">
        <input type="text" value={result} ref={inputRef} />
      </from>

      <div className="button-area">
        <button className="ac" onClick={clear}>
          Clear
        </button>
        <button className="ac" onClick={backspace}>
          C
        </button>
        <button  className="prcnt" onClick={handleClick}>
          +
        </button>
        <button   className="btnstyle " name="7" onClick={handleClick}>
          7
        </button>
        <button  className="btnstyle " name="8" onClick={handleClick}>
          8
        </button>
        <button    className="btnstyle "   name="9" onClick={handleClick}>
          9
        </button>
        <button     className="btnstyle "  name="-" onClick={handleClick}>
          -
        </button>
        <button    className="btnstyle " name="4" onClick={handleClick}>
          4
        </button>
        <button     className="btnstyle "  name="5" onClick={handleClick}>
          5
        </button>
        <button    className="btnstyle "  name="6" onClick={handleClick}>
          6
        </button>
        <button    className="btnstyle "   name="*" onClick={handleClick}>
          &times;
        </button>
        <button     className="btnstyle "   name="1" onClick={handleClick}>
          1
        </button>
        <button     className="btnstyle "   name="2" onClick={handleClick}>
          2
        </button>
        <button    className="btnstyle "   name="3" onClick={handleClick}>
          3
        </button>
        <button     className="btnstyle "    name="/" onClick={handleClick}>
          /
        </button>
        <button     className="btnstyle "  name="0" onClick={handleClick}>
          0
        </button>
        <button     className="ac "   name="." onClick={handleClick}>
          .
        </button>
        <button className="ac" onClick={calculate}>
          Result
        </button>
      </div>
    </div>
  );
}

export default Fun;