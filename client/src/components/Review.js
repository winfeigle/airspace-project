import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Review({review, user, handleReviewEdit, handleReviewDestroy, editable}){
    const [ comment, setComment ] = useState(review.comment)

    const handleEdits = (e) => {
        setComment(e.target.value)
    }



    return(
        <div className="review">
            <div className="review-card-header">

            <span className="review-title">{`"${review.title}"`}</span>

            
            {user.id === review.user.id ?
                <div className="review-button-container">
                    <Button
                    variant="outline-info" className="me-2"
                    onClick={() => handleReviewEdit(review.id)}
                    >
                        {editable ? "save edits" : "edit"}
                    </Button>

                    { !editable ? 
                        <Button 
                            variant="dark"
                            onClick={()=> {handleReviewDestroy(review.id)}}>
                            ✕
                        </Button> 
                    : null }
                    
                </div> 
            : null}
            </div>

            <div className="horizontal-seperator"></div>

            {(editable && review.user.id === user.id) ? 
                <Form className="editable-review">
                    <Form.Label htmlFor="comment"></Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="5"
                        name="comment"
                        value={comment}
                        onChange={(e) => handleEdits(e)}
                        />
                </Form>
            : <p>{review.comment}</p>}
                        


            <span className="review-username">
                <b>{`@${review.user.username}`}</b>
            </span>
        </div>

    )
}

export default Review;