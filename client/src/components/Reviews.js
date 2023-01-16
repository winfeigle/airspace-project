import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import Button from 'react-bootstrap/Button';


function Reviews({user}){
    const params = useParams()
    const [ reviews, setReviews ] = useState([])
    

    useEffect(() => {
        fetch(`/spaces/${params.id}/reviews`)
            .then((r) => r.json())
            .then(setReviews);
      }, [params.id]);

    const updateReviews = (data) => {
        setReviews([data, ...reviews])
    }

    const handleReviewDestroy = (reviewId) => {
        console.log(reviewId)
        fetch(`/reviews/${reviewId}`, {
            method: "DELETE",
        })
    }

    
    return(
        <div id="reviews-container">

            <h2 className="reviews-header"> Here's what others are saying... </h2>
            <ReviewForm 
                spaceId={params.id}
                updateReviews={updateReviews}
                />
            {reviews.map((review) => {
                return(
                    <div 
                        key={review.id} 
                        className="review">
                            <div className="review-card-header">
                                <span className="review-title">{`"${review.title}"`}</span>

                                {
                                user.id === review.user.id ?
                                <div className="review-button-container">
                                    <Button
                                    variant="outline-info" className="me-2"
                                    >
                                        edit
                                    </Button>
                                    <Button 
                                    variant="dark"
                                    onClick={()=> handleReviewDestroy(review.id)}>
                                        ✕
                                    </Button>
                                </div>
                                :
                                null
                                }
                            </div>

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