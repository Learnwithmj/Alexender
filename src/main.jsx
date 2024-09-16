import React from 'react'
import ReactDOM from 'react-dom/client';
import Men from './components/Men/Men.jsx';
import Women from './components/Women/Women.jsx'
import Kids from './components/Kids/Kids.jsx';
import Beauty from './components/Beauty/Beauty.jsx'
import Living from './components/Home&Living/Living.jsx'
import Studio from './components/Studio/Studio.jsx';
import Home from './components/Home/Home.jsx';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import Layout from './Layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home/>}/>  
    <Route path='/men' element={<Men/>} />
    <Route path='/women' element={<Women/>} />
    <Route path='/kids' element={<Kids/>} />
      <Route path='/living' element={<Living/>} />
      <Route path='/beauty' element={<Beauty/>} />
      <Route path='/studio' element={<Studio/>} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
