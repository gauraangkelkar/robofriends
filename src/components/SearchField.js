import React from "react";

const SearchField = ({onSearchChange}) =>
{
    return (
        <div>
            <input className="br3 b--light-purple" type="text" onChange={onSearchChange}/>
        </div>
    );
}

export default SearchField;