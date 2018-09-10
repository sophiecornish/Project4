import React from 'react';

function FilterSidebar({ options, handleChange, handleSelectAll }) {
  // Is every option active?
  const allActive = options.every(option => option.active);
  return (
    <div>
      <div className="field">
        <label className="checkbox" htmlFor="all">Select all</label>
        <input className="checkbox" type="checkbox" name="all" onChange={handleSelectAll} checked={allActive}/>
      </div>
      {options.map((option, i) =>
        <div key={i} className="field">
          <label className="checkbox" htmlFor={option.value}>{option.label}</label>
          <input type="checkbox" name={option.value} onChange={handleChange} checked={option.active}/>
        </div>
      )}
    </div>
  );
}

export default FilterSidebar;
