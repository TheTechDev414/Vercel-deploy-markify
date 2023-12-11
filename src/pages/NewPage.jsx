import React from 'react'
import { useNavigate } from 'react-router-dom'

const NewPage = () => {
    const navigate = useNavigate()    
  return (
    <div>
        <h1 style={{color: 'red'}}>New Page</h1>

        <button onClick={() => navigate('/')}>Home Page</button>
    </div>
  )
}

export default NewPage