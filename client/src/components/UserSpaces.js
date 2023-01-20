import React from "react";
import Button from "react-bootstrap/esm/Button";

function UserListings({spaces}){

    const renderSpaces = spaces.map((space) => {
        return(
            <Button 
                variant="outline-warning"
                key={space.id}
                className="user-space"
                href={`/spaces/${space.id}`}>
                {space.name}
            </Button>
        )
    })

    return(
        <div id="user-spaces-container">
            <h4>Your Listings</h4>
            <div className="space-buttons-container">
                {renderSpaces}
            </div>
        </div>
    )
}

export default UserListings;