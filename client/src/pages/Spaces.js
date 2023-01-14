import React, { useEffect, useState } from "react";
import SpaceCard from "../components/SpaceCard";



function Spaces(){
    const [spaces, setSpaces] = useState([])

    useEffect(() => {
        fetch("/spaces").then((r) => r.json()).then(setSpaces);
      }, []);


    return(
        <div className="spaces-container">
           {
            spaces.map(space => {
                return(
                    <SpaceCard 
                        key={space.id} 
                        space={space}
                        />
                )
            })
           }
        </div>
            
    )
}

export default Spaces;