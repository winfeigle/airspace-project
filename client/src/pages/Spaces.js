import React, { useEffect, useState } from "react";

function Spaces(){
    const [spaces, setSpaces] = useState([])

    useEffect(() => {
        fetch("/spaces")
          .then((r) => r.json())
          .then(setSpaces);
      }, []);


    return(
        <div className="spaces-container">
           {console.log(spaces)}
        </div>
            
    )
}

export default Spaces;