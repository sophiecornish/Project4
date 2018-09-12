import React from 'react';

function SearchBar( { handleChange, searchTerm, handleToggleSearch, toggleSearch }) {
  return (
    <section>
      <div className="field  is-horizontal">
        <label htmlFor="searchTerm" className="label"><i onClick={handleToggleSearch} className="fas fa-search"></i>
        </label>
        {toggleSearch&&
        <input name="searchTerm"
          className="input"
          onChange={handleChange}
          value={searchTerm || ''}>
        </input>
        }
      </div>
    </section>
  );
}

export default SearchBar;
