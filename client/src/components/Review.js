import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Review({review, user, handleReviewEdit, handleReviewDestroy}){
    const [ editable, setEditable ] = useState(false)
    const [ comment, setComment ] = useState(review.comment)




    return(
        <div className="review">
            <div className="review-card-header">

            <span className="review-title">{`"${review.title}"`}</span>

            
            {user.id === review.user.id ?
                <div className="review-button-container">

                    { !editable ? 
                        <Button
                            variant="outline-info" className="me-2"
                            onClick={() => {
                                setEditable(!editable)
                                }}
                            > edit
                        </Button>
                    : 
                        <Button
                            variant="warning" className="me-2"
                            onClick={() => {
                                setEditable(!editable)
                                handleReviewEdit(review.id, comment)
                                }}
                            > save edits
                        </Button>
                    }



                    { !editable && (
                        <Button 
                            variant="dark"
                            onClick={()=> {handleReviewDestroy(review.id)}}>
                            ✕
                        </Button> 
                    )}
                    
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
                        onChange={(e) => setComment(e.target.value)}
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