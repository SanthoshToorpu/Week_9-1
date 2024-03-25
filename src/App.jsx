import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Customhooks from './components/Customhooks'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <h1>Week 9.1</h1>
        <h3>Custom Hooks</h3>
        <ul style={{listStyle: 'none'}}>
          <li><a href="/"><button>Home</button></a></li>
          <li><a href="/Customhooks"><button>Custom Hooks</button></a></li>
        </ul>
        <Routes>
          <Route path='/Customhooks' element={<Customhooks/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
