import React, { useEffect, useState } from "react";

function Reviews({ spaceId }){
    const [ reviews, setReviews ] = useState([])

useEffect(() => {
        fetch(`/spaces/${spaceId}/reviews`)
            .then((r) => r.json())
            .then(setReviews);
      }, [reviews]);

    
    return(
        <div id="reviews-container">
            {reviews?.map((review) => {
                return(
                    <div 
                        key={review.id} 
                        className="review">
                            <span className="review-title">{`"${review.title}"`}</span>
                            <div className="horizontal-seperator"></div>
                            <p>{review.comment}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Reviews;