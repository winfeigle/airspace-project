import React, { useEffect, useState } from "react";
import SpaceCard from "../components/SpaceCard";
import FilterBar from "../components/FilterBar";



function Spaces(){
    const [spaces, setSpaces] = useState([])

    useEffect(() => {
        fetch("/spaces")
            .then((r) => r.json())
            .then(setSpaces);
      }, []);


    return(
    <div className="spaces-page">
    <FilterBar />
        <div className="spaces-container">
           {
            spaces.map((space) => {
                return(<SpaceCard key={space.id} space={space}/>);
            })
           }
        </div>
    </div>  
    )
}

export default Spaces;