import React, { useEffect, useState } from "react";
import SpaceCard from "../components/SpaceCard";
import FilterBar from "../components/FilterBar";



function Spaces(){
    const [spaces, setSpaces] = useState([]);
    const [filter, setFilter] = useState(null);
    const [searchResults, setSearchResults] = useState("");

    useEffect(() => {
        fetch("/spaces")
            .then((r) => r.json())
            .then(setSpaces);
      }, []);


      const onFilterChange = (keyword) => {
        setFilter(keyword)

        switch(keyword) {
            case "price-high":
                setSpaces((spaces) => spaces.sort((a, b) => b.price - a.price))
                break;
            case "price-low":
                setSpaces((spaces) => spaces.sort((a, b) => a.price - b.price))
                break;
            case "rating-high":
                setSpaces((spaces) => spaces.sort((a, b) => b.rating - a.rating))
                break;
            default:
                break;
            }
        }

        
        const onSearchChange = (keyword) => {

            setSearchResults(spaces.filter((space) => space.name.toLowerCase().includes(keyword.toLowerCase())))
        }

    return(
    <div className="spaces-page">
        <div className="filter-bar-container">
            <FilterBar 
                id="filter-bar"
                onFilterChange={onFilterChange}
                onSearchChange={onSearchChange}
                filter={filter}
                />
        </div>
        <div className="spaces-container">
           {
            !searchResults ?
            spaces.map((space) => {
                return(<SpaceCard key={space.id} space={space}/>);
            })
            :
            searchResults.map((space) => {
                return(<SpaceCard key={space.id} space={space}/>);
            })
           }
        </div>
    </div>  
    )
}

export default Spaces;