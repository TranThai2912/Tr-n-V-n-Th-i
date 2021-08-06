import React from "react";
const FilterSearch = (props) => {
  console.log(props)
    return(
        <>
            <input
                className="form-control form-control-dark w-100 bg-dark text-light"
                type="text"
                placeholder="Search"
                aria-label="Search"              
            />
        </>
    )
}
export default FilterSearch