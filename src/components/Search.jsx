import React from "react";
import './css/search.css'

const Search = () => {
  return (
    <>
      <div>
        <div className="input">
          <input type="text" placeholder="Search....." />
          <i className="fa fa-search" style={{fontsize:"24px"}}/>
        </div>
      </div>
    </>
  );
};

export default Search;
