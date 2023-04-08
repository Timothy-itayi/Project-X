import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'


// const [currentSong, setCurrentSong] = useState('') 
// example use for state to create a form 


function Myform(){
    const [name , setUserName ] = useState('')

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`);
      }
    
      return (
        <form onSubmit={handleSubmit}>
          <label>Enter your name:
            <input 
              type="text" 
              value={name}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form>
      )
    }

    export default Myform