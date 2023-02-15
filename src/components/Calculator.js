import React, { useState } from "react";
import calculate from "../logic/calculate";

function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const clickHandler = (e) => {
    setState((state) => calculate(state, e.target.name));
  };

  return (
    <div className="calculator">
      <div className="result">
        {state.total}
        {state.operation}
        {state.next}
      </div>
      <div className="body">
        <div className="numbers">
          <button
            type="button"
            onClick={clickHandler}
            name="AC"
            className="num ac"
          >
            AC
          </button>
          <button
            type="button"
            onClick={clickHandler}
            name="+/-"
            className="num plus-minus"
          >
            +/-
          </button>
          <button
            type="button"
            onClick={clickHandler}
            name="%"
            className="num percent"
          >
            %
          </button>
          <button
            type="button"
            onClick={clickHandler}
            name="9"
            className="num nine"
          >
            9
          </button>
          <button
            type="button"
            onClick={clickHandler}
            name="8"
            className="num eight"
          >
            8
          </button>
          <button
            type="button"
            onClick={clickHandler}
            name="7"
            className="num seven"
          >
            7
          </button>
          <button
            type="button"
            onClick={clickHandler}
            name="6"
            className="num six"
          >
            6
          </button>
          <button
            type="button"
            onClick={clickHandler}
            name="5"
            className="num five"
          >
            5
          </button>
          <button
            type="button"
            onClick={clickHandler}
            name="4"
            className="num four"
          >
            4
          </button>
          <button
            type="button"
            onClick={clickHandler}
            name="3"
            className="num three"
          >
            3
          </button>
          <button
            type="button"
            onClick={clickHandler}
            name="2"
            className="num two"
          >
            2
          </button>
          <button
            type="button"
            onClick={clickHandler}
            name="1"
            className="num one"
          >
            1
          </button>
          <button
            type="button"
            onClick={clickHandler}
            name="0"
            className="num zero"
          >
            0
          </button>
          <button
            type="button"
            onClick={clickHandler}
            name="."
            className="num dot"
          >
            .
          </button>
        </div>
        <div className="symbols">
          <button
            type="button"
            onClick={clickHandler}
            name="÷"
            className="symbol divide"
          >
            ÷
          </button>
          <button
            type="button"
            onClick={clickHandler}
            name="x"
            className="symbol multiply"
          >
            x
          </button>
          <button
            type="button"
            onClick={clickHandler}
            name="-"
            className="symbol subtract"
          >
            -
          </button>
          <button
            type="button"
            onClick={clickHandler}
            name="+"
            className="symbol add"
          >
            +
          </button>
          <button
            type="button"
            onClick={clickHandler}
            name="="
            className="symbol equal"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
