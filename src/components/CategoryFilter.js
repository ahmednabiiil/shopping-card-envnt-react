"use client";

import React from "react";

const CategoryFilter = ({ onChange }) => {
  const categories = ["All", "Fruits", "Vegetables", "Meat"];

  return (
    <div className="my-lg-50 my-30">
      <div className="row align-items-center">
        <div className="col-lg-8">
          <label htmlFor="category">Filter by Category:</label>
        </div>
        <div className="col-lg-4">
          <select
            id="category"
            className="form-select"
            onChange={(e) => onChange(e.target.value)}
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
