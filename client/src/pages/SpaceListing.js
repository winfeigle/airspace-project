import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function SpaceListing(){
    const [ spaceInfo, setSpaceInfo ] = useState([])
    const [ pageContent, setPageContent ] = useState([])
    const params = useParams()
    
    useEffect(() => {
        fetch(`/spaces/${params.id}`)
            .then((r) => r.json())
            .then(setSpaceInfo);
      }, [params.id]);

    return(
    <div id="space-info-container">
        <div className="button-group" style={{color: "white", marginTop: "120px"}}>
            <ButtonGroup 
                aria-label="description button" className="justify-content-center"
                onClick={(e) => setPageContent(e.target.id)}>
                <Button
                    id="description" 
                    variant="light">Description</Button>
                <Button 
                    id="reviews" 
                    variant="light" className="px-3">Reviews</Button>
                <Button 
                    id="contact" 
                    variant="light">Contact</Button>
            </ButtonGroup>
        </div>
        <div id="images-container">
            <div className="featured-image">
                <img src={spaceInfo.image_url} alt="office space"/>
            </div>
            <div className="supporting-images">
                <div className="blank-image"></div>
                <div className="blank-image"></div>
                <div className="blank-image"></div>
            </div>
        </div>

    </div>
    )
}

export default SpaceListing;