import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Reviews(){
    const [ reviews, setReviews ] = useState([])
    const params = useParams()

useEffect(() => {
        fetch(`/spaces/${params.id}/reviews`)
            .then((r) => r.json())
            .then(setReviews);
      }, [params.id]);


    
    return(
        <div id="reviews-container">
            <div id="review-form">
                this is a review form...
            </div>
            <h2 className="reviews-header"> Here's what others are saying... </h2>
            {reviews.map((review) => {
                return(
                    <div 
                        key={review.id} 
                        className="review">
                            <span className="review-title">{`"${review.title}"`}</span>
                            <div className="horizontal-seperator"></div>
                            <p>{review.comment}</p>
                            <span className="review-username">
                                <b>{`@${review.user.username}`}</b>
                            </span>
                    </div>
                )
            })}
        </div>
    );
}

export default Reviews;