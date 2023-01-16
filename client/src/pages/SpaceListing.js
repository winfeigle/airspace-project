import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Review from "../components/Review";

import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';


function SpaceListing(){
    const [ spaceInfo, setSpaceInfo ] = useState([])
    const [ pageContent, setPageContent ] = useState([])
    const params = useParams()
    
    useEffect(() => {
        fetch(`/spaces/${params.id}`)
            .then((r) => r.json())
            .then(setSpaceInfo);
      }, [params.id]);

    return(
    <div id="space-container" style={{paddingTop: "120px"}}>
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
                        <ListGroup.Item action href="#contact">
                        Contact
                        </ListGroup.Item>
                    </ListGroup>
                    <Tab.Content id="list-content">
                        <Tab.Pane eventKey="#information">
                            <b>Description</b>
                            <p>{spaceInfo.description}</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#reviews">
                            Reviews here...
                        </Tab.Pane>
                        <Tab.Pane eventKey="#contact">
                            Contact info here...
                        </Tab.Pane>
                    </Tab.Content>
            </Tab.Container>
        </div>

    </div>
    )
}

export default SpaceListing;