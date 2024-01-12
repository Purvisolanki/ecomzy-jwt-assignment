import { FaShoppingCart } from "react-icons/fa";
// import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/Slices/searchSlice";

const Navbar = () => {

  const { cart } = useSelector((state) => state);

  const searchTerm = useSelector((state) => state.search.searchTerm);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const newSearchTerm = e.target.value;
    dispatch(setSearchTerm(newSearchTerm));
  };

  return (
    <div>
      <nav className="flex justify-between items-center height-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img
              src="../ecomzy-logo.png"
              alt="Shopping Cart"
              className="h-[60px] py-2"
            />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          {/* Search Input */}
          <div>
            <input
              type="text"
              placeholder="Search products..."
              className="px-2 py-1 border border-gray-300 rounded text-gray-700"
              onChange={handleSearch}
            />
          </div>

          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
