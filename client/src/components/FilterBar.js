import React from "react";
import FilterIcon from '../filter-icon.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

function FilterBar(){


    return(
        <div id="filter-search-bar">     
        <Dropdown id='dropdown' >
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <img id="filter-icon" alt="filter button" src={FilterIcon}/>  Filter
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/price-highest">Price (high-low)</Dropdown.Item>
                    <Dropdown.Item href="#/price-lowest">Price (low-high)</Dropdown.Item>
                    <Dropdown.Item href="#/rating">Rating (highest)</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className="vertical-seperator"></div>
            <Form.Control id='search-bar' type="text" placeholder={`Search office spaces`}/>
        </div>
    )
}

export default FilterBar;