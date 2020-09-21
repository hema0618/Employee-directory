import React, { useContext } from "react";
import "./SearchBox.css";
import DataAreaContext from "../../utils/DataAreaContext";
// Using the datalist element we can create 

const SearchBox = () => {
  const context = useContext(DataAreaContext);

  return (
      <div className="searchbox">
          <form className="form-inline">
              <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={e => context.handleSearchChange(e)}
              />
              <button className="btn my-2 my-sm-0" type="submit">
                  Search
               </button>
          </form>
      </div>
  );
}
export default SearchBox;

// Class activity 

// function SearchForm(props) {
//   return (
//     <form className="search">
//       <div className="form-group">
//         <label htmlFor="breed">Breed Name:</label>
//         <input
//           value={props.search}
//           onChange={props.handleInputChange}
//           name="breed"
//           list="breeds"
//           type="text"
//           className="form-control"
//           placeholder="Type in a dog breed to begin"
//           id="breed"
//         />
//         <datalist id="breeds">
//           {props.breeds.map(breed => (
//             <option value={breed} key={breed} />
//           ))}
//         </datalist>
//         <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
//           Search
//         </button>
//       </div>
//     </form>
//   );
// }