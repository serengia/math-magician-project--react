import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CalculatorPage from "./pages/CalculatorPage";
import HomePage from "./pages/HomePage";
import QuotePage from "./pages/QuotePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
