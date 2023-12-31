import React from "react";
import { useState, useEffect } from "react";

function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {!isOpen && (
                <button onClick={toggleDropdown} type="submit" style={{ marginLeft: "0.5rem", border: "none", borderRadius: "0" }} className="btn btn-outline-light nav-link nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </button>
            )}

            {isOpen && (
                <form>
                    <div className="d-flex">
                        <input style={{ width: "180px", borderRadius: "20px" }} className="title-search-filter" type="search" placeholder="search shoes" aria-label="Search" />
                    </div>
                </form>
            )}
        </div>
    );
}

export default SearchBar;
