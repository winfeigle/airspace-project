import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import ReviewForm from "./ReviewForm";


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

    const handleReviewEdit = (reviewId, comment) => {
        fetch(`/reviews/${reviewId}`, {
            method: "PATCH",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({comment: comment})
        }).then(res => {
            if(res.ok){
                console.log(reviewId, comment)
                // ===================
                // 
                // RE-RENDER REVIEWS WITH UPDATED COMMENT HERE...
                // 
                // ===================

            }
        })
    }

    const handleReviewDestroy = (reviewId) => {
        fetch(`/reviews/${reviewId}`, {
            method: "DELETE",
        }).then(res => {
            if(res.ok){
                setReviews(
                    reviews.filter((review) => {
                        return review.id !== reviewId
                 }))
            }
        })
    }

    
    return(
        <div id="reviews-container">

            <h2 className="reviews-header"> Here's what others are saying... </h2>
            <ReviewForm 
                spaceId={params.id}
                updateReviews={updateReviews}
                />

            {reviews.map(review => {
                return(<Review 
                    key={review.id}
                    review={review} 
                    user={user}
                    handleReviewDestroy={handleReviewDestroy}
                    handleReviewEdit={handleReviewEdit}
                    />)
            })}
        </div>
    );
}

export default Reviews;