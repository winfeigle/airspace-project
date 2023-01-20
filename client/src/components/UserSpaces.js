import React from "react";
import Button from "react-bootstrap/esm/Button";

function UserSpaces({spaces}){

    const renderSpaces = spaces.map((space) => {
        return(
            <Button 
                key={space.id}
                variant="outline-warning"
                className="user-space"
                href={`/spaces/${space.id}`}>
                {space.name}
            </Button>
        )
    })

    return(
        <div id="user-spaces-container" key="user-spaces">
            <h4>Your Listings</h4>
            <div className="space-buttons-container">
                {renderSpaces}
            </div>
        </div>
    )
}

export default UserSpaces;