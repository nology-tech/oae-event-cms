import React from 'react';
import "./SearchBox.scss";

const SearchBox = (props) => {
   const { searchTerm, handleInput } = props;

   return (
      <form>
         <input type="text" value={searchTerm} onInput={handleInput} className="search-box__input" placeholder='Search by event name...' />
      </form>
   )
}

export default SearchBox
