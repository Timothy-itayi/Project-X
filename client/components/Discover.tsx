import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'



// const [currentSong, setCurrentSong] = useState('') 
// example use for state to create a form 


function Myform(){
  const [formData, setFormData] = useState({ name: "", password: "" });


  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Do something with form data
  
  };

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }

    export default Myform
   
     