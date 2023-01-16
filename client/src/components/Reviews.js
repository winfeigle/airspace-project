import React from "react";

function Reviews({ reviews }){

    
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