import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

function CreateListing({addNewSpace}){
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        description: "",
        price: "",
        image_url: "",
        rating: 0
    })

    const handleSubmit = (e) => {
      e.preventDefault()
      fetch('/spaces', {
        method: 'POST',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify(formData)
      }).then((r) => {
        if(r.ok){
          addNewSpace(formData)
          setFormData({name: "",location: "",description: "",price: "",image_url: ""})
        } else{
          r.json().then((err) => setErrors(err.errors));
        }
      })
    }

    const handleChange = (e) => {
      setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              })
    }

    return(
      <div id="listing-container">
        <form id="listing-form" onSubmit={(e) => handleSubmit(e)}>
          <h4 style={{ textAlign: "center"}}>Create new listing</h4>
          <label>Title
            <br/>
            <input 
              id="name"
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              />
          </label>

          <label>Location
            <br/>
            <input 
              id="location"
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Denver, Colorado"
              name="location"
              value={formData.location}
              />
          </label>

          <label>Price
            <br/>
            <input 
              id="price"
              onChange={(e) => handleChange(e)}
              type="number"
              placeholder="100"
              name="price"
              value={formData.price}
              />
          </label>

          <label>Image URL
            <br/>
            <input 
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Paste URL here"
              name="image_url"
              value={formData.image_url}
              />
          </label>

          <label htmlFor="description">Description
            <br/>
              <textarea 
                id="description" 
                name="description"
                placeholder="Tell us more..."
                onChange={(e) => handleChange(e)}
                type="textarea"
                value={formData.description}
                >
              </textarea>
          </label>

          <div className="errors-container">
            {
              errors.map((err) => (
              <span id="error-message" key={err}>{`Invalid: ${err}`}</span>
            ))
            }
          </div>
      
      <Button variant="info" type="submit">
        Submit
      </Button>
    </form>
    </div>
    )
}

export default CreateListing;