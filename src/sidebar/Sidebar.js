import React from "react";
import "./Sidebar.css";
import Price from "./price/Price";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Price />
      </section>
    </>
  );
};

export default Sidebar;
