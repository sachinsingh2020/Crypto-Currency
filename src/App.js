import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Coins from "./component/Coins";
import Exchanges from "./component/Exchanges";
import CoinDetails from "./component/CoinDetails";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exaxt path='/coins' element={<Coins />} />
        <Route exact path='/exchanges' element={<Exchanges />} />
        <Route exact path='/coin/:id' element={<CoinDetails />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
