import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()    
  return (
    <div>
        <h1 style={{color: 'red'}}>Home Page</h1>

        <button onClick={() => navigate('/new-page')}>New Page</button>
        <button onClick={() => navigate('/github_auth')}>New Page</button>
        <button onClick={() => navigate('/onedrive_auth')}>New Page</button>
    </div>
  )
}

export default Home