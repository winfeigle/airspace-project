import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function ReviewForm({spaceId, updateReviews}){
    const [ userReviewTitle, setUserReviewTitle ] = useState("")
    const [ userReviewComment, setUserReviewComment ] = useState("")
    const [ showForm, setShowForm ] = useState(true)
    const [ errors, setErrors ] = useState([])

    useEffect(() => {
        setShowForm(false)
      }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault()
        fetch(`/reviews`, {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                title: userReviewTitle,
                comment: userReviewComment,
                space_id: parseInt(spaceId)
            })
        }).then(res => {
                if (!res.ok){
                    res.json().then((err) =>{
                    setErrors(err.errors)
                })
                }else{
                    setShowForm(false)
                    res.json().then((data) => updateReviews(data))
                }
            })
    }

    if(!showForm) return(
            <Button 
                className="m-2 p-4"
                variant="outline-light"
                onClick={() => setShowForm(true)}
                >Write a review</Button>
        )

    return(
        <div className="review-form-container">
        <div id="review-form">
                <Form onSubmit={(e) => handleFormSubmit(e)}>
                    <FloatingLabel
                        controlId="floatingTitle"
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
                        controlId="floatingComment"
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
                    
                    <Button 
                        variant="dark" 
                        type="submit"
                        >Submit
                    </Button>

                    <Button 
                        variant="outline-light" 
                        className="ms-3"
                        onClick={() => setShowForm(false)}
                        >Cancel
                    </Button>
                </Form>
            </div>
            { errors && 
                <div id="errors-container">
                    { errors.map(error => <span id="error-message" key={error}>{error}</span>)}
                    
                </div>
                }
        </div>
    )
}

export default ReviewForm;