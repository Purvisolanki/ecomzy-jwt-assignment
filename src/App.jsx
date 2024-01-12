import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Sidebar from "./sidebar/Sidebar";
import PriceFilter from "./components/PriceFilter";


const App = () => {
  return (<div>
    <div className="bg-slate-900 sticky top-0 z-50">
      <Navbar className=""/>
      {/* <Sidebar /> */}
    </div>
    {/* <PriceFilter /> */}
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
  </div>);
};

export default App;
