import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";

function Reviews(){
    const params = useParams()
    const [ reviews, setReviews ] = useState([])
    

    useEffect(() => {
        fetch(`/spaces/${params.id}/reviews`)
            .then((r) => r.json())
            .then(setReviews);
      }, [params.id]);

    
    return(
        <div id="reviews-container">
            <ReviewForm />

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