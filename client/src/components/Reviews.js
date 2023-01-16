import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Reviews({  }){
    const [ reviews, setReviews ] = useState([])
    const params = useParams()

useEffect(() => {
        fetch(`/spaces/${params.id}/reviews`)
            .then((r) => r.json())
            .then(setReviews);
      }, []);


    
    return(
        <div id="reviews-container">
            {reviews.map((review) => {
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