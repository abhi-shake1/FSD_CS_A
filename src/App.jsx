import React from 'react'
import {BrowserRouter,Routes,Route} from 
"react-router-dom";
import MainLayout from './components/MainLayout';
import Registration from './components/Registration';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element= {<Registration  />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App