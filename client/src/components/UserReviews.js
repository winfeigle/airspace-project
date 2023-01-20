import React from "react";
import Button from "react-bootstrap/esm/Button";

function UserReviews({reviews}){

    const renderReviews = reviews.map((review) => {
        return(
            <Button 
                variant="outline-secondary"
                key={review.id}
                className="user-review"
                style={{textAlign: "left"}}
                href={`/spaces/${review.space_id}`}
                >
                 <b>{review.title}</b>
                <p>{review.comment.substr(0,40)}...</p>
            </Button>
        )
    })

    return(
        <div id="user-reviews-container">
            <h4>Your Reviews</h4>
            {renderReviews}
        </div>
    )
}

export default UserReviews;