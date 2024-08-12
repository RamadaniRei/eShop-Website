import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
