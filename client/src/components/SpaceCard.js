import React from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { useNavigate } from 'react-router-dom';

function SpaceCard({space}){
    const {id, name, location, rating, image_url, price} = space;
    const navigate = useNavigate()

    return(
        <div 
            className="space-card" 
            onClick={() => navigate(`/spaces/${id}`)}
            >
                <Card border="dark">
                    <Image src={image_url} style={{ aspectRatio: "1/1", height: "100%", width: "undefined", objectFit: "cover" }} rounded/>
                </Card>
                <article className="space-card-info">
                    <div>
                        <h2>{name}</h2>
                        <h3>{location}</h3>
                        <h2>{`$${price}`} <span className="space-timeframe">week</span></h2>
                    </div>
                    <div>
                        <h2 id="star-rating">{'★'+ rating}</h2>
                    </div>
            </article>
        </div>
    )
}

export default SpaceCard;