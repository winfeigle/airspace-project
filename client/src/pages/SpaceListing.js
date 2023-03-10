import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Reviews from "../components/Reviews";

import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';


function SpaceListing({ user }){
    const [ spaceInfo, setSpaceInfo ] = useState([])
    const params = useParams()
    
    useEffect(() => {
        fetch(`/spaces/${params.id}`)
            .then((r) => r.json())
            .then(setSpaceInfo);
      }, [params.id]);


    return(
    <div id="space-container">
        <h2 style={{color: "white"}}>{spaceInfo.name}</h2>
        <div id="images-container">
            <div className="featured-image">
                <img src={spaceInfo.image_url} alt="office space"/>
            </div>
            <div className="supporting-images">
                <div className="blank-image"></div>
                <div className="blank-image"></div>
                <div className="blank-image"></div>
            </div>
        </div>
        <div id="information-container">
            <Tab.Container id="tab-container" defaultActiveKey="#information" >
                    <ListGroup id="list-group" horizontal>
                        <ListGroup.Item action href="#information" >
                            Information
                        </ListGroup.Item>
                        <ListGroup.Item action href="#reviews">
                        Reviews
                        </ListGroup.Item>
                        {/* <ListGroup.Item action href="#book">
                        Book
                        </ListGroup.Item> */}
                    </ListGroup>
                    <Tab.Content id="list-content">
                       
                        <Tab.Pane eventKey="#information">
                                    <b>Description</b>
                                    <p>{spaceInfo.description}</p>
                                   <br/>
                                    <div className="additional-info">
                                        <div>
                                            <p>Price per week</p>
                                            <h5>${spaceInfo.price}</h5> 
                                        </div>
                                        <div>
                                            <p>Rating</p>
                                            <h5>???{spaceInfo.rating}</h5>
                                        </div>
                                        <div>
                                            <p>Location</p>
                                            <h5>{spaceInfo.location}</h5>
                                        </div>
                                    </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#reviews">
                            <Reviews user={user} />
                        </Tab.Pane>
                        {/* <Tab.Pane eventKey="#book">
                            <b>Book today!</b>
                            
                        </Tab.Pane> */}
                    </Tab.Content>
            </Tab.Container>
        </div>

    </div>
    )
}

export default SpaceListing;