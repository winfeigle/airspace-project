import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import ReviewForm from "./ReviewForm";


function Reviews({user}){
    const [ editable, setEditable ] = useState(false)
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

    const handleReviewEdit = (reviewId) => {
        setEditable(!editable)
    }

    const handleReviewDestroy = (reviewId) => {
        fetch(`/reviews/${reviewId}`, {
            method: "DELETE",
        }).then(res => {
            if(res.ok){
                setReviews((reviews) => {
                    let filteredReviews = [];
                    reviews.filter((review) => {
                        if(review.id !== reviewId){
                            filteredReviews.push(review);
                        } else{
                            return null;
                        }
                        return filteredReviews;
                    })
                    return filteredReviews;
                })
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
                    editable={editable}
                    />)
            })}
        </div>
    );
}

export default Reviews;