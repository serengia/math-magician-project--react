import React from "react";
import Calculator from "../components/Calculator";
import Quote from "../components/Quote";
import quotes from "../quotes";

const getQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
const randomQuote = getQuote();
randomQuote.bgColor = "#eee";

function CalculatorPage() {
  return (
    <main className="page-calculator">
      <div className="row">
        <div className="calculator-page-container">
          <div className="description-wrapper">
            <h2>Let&apos;s do some math!</h2>
            <Quote quoteObj={randomQuote} />
          </div>
          <Calculator />
        </div>
      </div>
    </main>
  );
}

export default CalculatorPage;
