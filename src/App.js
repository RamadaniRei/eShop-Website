import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import { initialState, reducer } from "./reducer";
import { StateProvider } from "./StateProvider";
import Login from "./pages/Login/Login";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </StateProvider>
  );
}

export default App;
