// PriceFilter.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPriceRange } from "../redux/Slices/priceSlice";
import { selectPriceRange } from '../../src/redux/Slices/priceSlice';
import "./PriceFilter.css"


const PriceFilter = () => {
  const dispatch = useDispatch();
  const selectedPriceRange = useSelector(selectPriceRange);
  const [radioChecked, setRadioChecked] = useState(!selectedPriceRange);

  useEffect(() => {
    // Update the local state when the selectedPriceRange changes
    setRadioChecked(!selectedPriceRange);
  }, [selectedPriceRange]);


  const handlePriceFilterChange = (event) => {
    const value = event.target.value;
    // If the same radio button is clicked again, toggle the state to null
    const newValue = selectedPriceRange === value ? null : value;
    dispatch(setPriceRange(newValue));


    // Manually uncheck the radio button if clearing the filter
    setRadioChecked(newValue === null);
    if (radioChecked === null) {
      event.target.checked = false;
    }
  };

  const clearFilter = () => {
    dispatch(setPriceRange(null));
    // setRadioChecked(false);
  };



  return ( <div className="price-container">
    <div className="price-radio-buttons"> 
      <h2 className="filter-heading">Filter</h2>
      <label>
        <input
          type="radio"
          name="priceRange"
          value="0-250"
          onChange={handlePriceFilterChange}
        />
        0 - 250 ₹
      </label>
      <label>
        <input
          type="radio"
          name="priceRange"
          value="251-800"
          onChange={handlePriceFilterChange}
        />
        250 - 800 ₹
      </label>
      <label>
        <input
          type="radio"
          name="priceRange"
          value="801-1200"
          onChange={handlePriceFilterChange}
        />
        801 - 1200 ₹
      </label>
      <label>
        <input
          type="radio"
          name="priceRange"
          value="1200-2000"
          onChange={handlePriceFilterChange}
        />
        1200 - 2000 ₹
      </label>
      <button onClick={clearFilter} className="clear-filter-button">Clear Filter</button>
      {/* Add more radio buttons as needed */}
    </div>
  </div>
    
  );
};

export default PriceFilter;
