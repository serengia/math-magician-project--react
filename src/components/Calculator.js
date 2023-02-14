import React from "react";

function Calculator() {
  return (
    <div className="calculator">
      <div className="result">Results</div>
      <div className="body">
        <div className="numbers">
          <div className="num ac">AC</div>
          <div className="num plus-minus">+/-</div>
          <div className="num percent">%</div>
          <div className="num nine">9</div>
          <div className="num eight">8</div>
          <div className="num seven">7</div>
          <div className="num six">6</div>
          <div className="num five">5</div>
          <div className="num four">4</div>
          <div className="num three">3</div>
          <div className="num two">2</div>
          <div className="num one">1</div>
          <div className="num zero">0</div>
          <div className="num dot">.</div>
        </div>
        <div className="symbols">
          <div className="symbol divide">/</div>
          <div className="symbol multiply">x</div>
          <div className="symbol subtract">-</div>
          <div className="symbol add">+</div>
          <div className="symbol equal">=</div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
