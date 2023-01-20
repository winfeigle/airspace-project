import React, {useState} from "react";
import FilterIcon from '../filter-icon.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

function FilterBar(){
    const [filter, setFilter] = useState(null)

    const handleFilter = (keyword) => {
        setFilter(keyword)

    }

    return(
        <div id="filter-search-bar">     
        <Dropdown id='dropdown' >
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    <img id="filter-icon" alt="filter button" src={FilterIcon}/>  { filter ? filter : "Filter"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item 
                        onClick={() => {handleFilter("price-high")}}
                        href="#/price-highest">
                            Price (high-low)</Dropdown.Item>
                    <Dropdown.Item 
                        onClick={() => {handleFilter("price-low")}}
                        href="#/price-lowest">
                            Price (low-high)</Dropdown.Item>
                    <Dropdown.Item 
                        onClick={() => {handleFilter("rating-high")}}
                        href="#/rating">
                            Rating (highest)</Dropdown.Item>
                            <Dropdown.Item 
                        onClick={() => {handleFilter(null)}}>
                            <b>clear filters </b></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <div className="vertical-seperator"></div>
            <Form.Control id='search-bar' type="text" placeholder={`Search office spaces`}/>
        </div>
    )
}

export default FilterBar;