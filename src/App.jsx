import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Navigation from './navigation/Navigation'
import GithubAuth from './pages/GithubAuth'
import OneDriveAuth from './pages/OneDriveAuth'

function App() {


  return (
    <ChakraProvider>
     <Navigation/>
     {/* <GithubAuth/> */}
     {/* <OneDriveAuth/> */}
   </ChakraProvider>
  )
}

export default App
