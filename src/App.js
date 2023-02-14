import Calculator from "./components/Calculator";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className="main">
        <div className="calculator-page row">
          <div className="text-container">
            <h4>Lets do some Math!</h4>
          </div>
          <Calculator />
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container row">
          <h4>Footer</h4>
        </div>
      </footer>
    </div>
  );
}

export default App;
