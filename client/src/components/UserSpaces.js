import React from "react";
import Button from "react-bootstrap/esm/Button";

function UserSpaces({spaces}){

    const renderSpaces = spaces.map((space) => {
        return(
            <div key={space.id}>
            <Button 
                variant="outline-warning"
                key={space.id}
                className="user-space"
                href={`/spaces/${space.id}`}>
                {space.name}
            </Button>
            </div>
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