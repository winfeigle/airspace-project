import React, {useEffect, useState} from "react";
import CreateListing from "../components/CreateListing";
import UserReviews from "../components/UserReviews"
import UserSpaces from "../components/UserSpaces"

function Account(){
    const [reviews, setReviews] = useState([]);
    const [spaces, setSpaces] = useState([]);

    useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
            setReviews(user.reviews)
            setSpaces(user.spaces)
        });
      }
    });
  }, []);
    

    return(
        <div className="ugc-container">
            <CreateListing />
            <div className="review-space-container">
                <UserReviews reviews={reviews}/>
                <UserSpaces spaces={spaces}/>
            </div>
        </div>
    )
}

export default Account;