import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function ReviewForm(){
    const [ userReviewTitle, setUserReviewTitle ] = useState("")
    const [ userReviewComment, setUserReviewComment ] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(userReviewTitle, userReviewComment)
    }


    return(
        <div id="review-form">
                <Form onSubmit={(e) => handleFormSubmit(e)}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Title"
                        style={{color: "#282c34"}}
                        >
                        <Form.Control 
                            type="title" 
                            placeholder="Title" 
                            value={userReviewTitle}
                            onChange={(e) => setUserReviewTitle(e.target.value)}
                            />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Comment"
                        className="mx-3"
                        style={{color: "#282c34"}}
                        >
                        <Form.Control 
                            type="text" 
                            placeholder="Comment" 
                            value={userReviewComment}
                            onChange={(e) => setUserReviewComment(e.target.value)}
                            />
                    </FloatingLabel>
                    
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
    )
}

export default ReviewForm;