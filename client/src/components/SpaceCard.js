import React from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

function SpaceCard({space}){
    const {id, name, location, description, image_url, price} = space;

    return(
        <div className="space-card">
            <Card border="dark">
                <Image src={image_url} style={{ width: "100%", height: "undefined", aspectRatio: "4/3" }} rounded fluid/>
            </Card>
            <article className="space-card-info">
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h2>{`$${price}`} <span className="space-timeframe">week</span></h2>
            </article>
        </div>
    )
}

export default SpaceCard;