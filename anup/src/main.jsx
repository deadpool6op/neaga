import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from "./pages/login.jsx"
import Merge from './pages/merge.jsx'
import Mens from "./pages/mens.jsx"
import Summer from './summer.jsx'
import Winterwear from "./pages/Winterwear.jsx"
import Button from './pages/Button.jsx'
import Home from './home.jsx'
import HomeBanner from './pages/HomeBanner.jsx'
import App from './App.jsx'
import Slider from './pages/Slider.jsx'

import {BrowserRouter,Routes,Route}from "react-router";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
<BrowserRouter>
<Routes>
  <Route path="/login" element={ <Login />}/>
  <Route path="/merge" element={ <Merge />}/>
   <Route path="/summer" element={ <Summer />}/>
  <Route path="/winterwear" element={ <Winterwear/>}/>
    <Route path="/mens" element={ <Mens/>}/>
      <Route path="/Button" element={ <Button/>}/>
   <Route path="/home" element={ <Home/>}/>
<Route path="/homebanner" element={ <HomeBanner/>}/>
<Route path="/slider" element={ <Slider/>}/>
<Route path="/app" element={ <App/>}/>

  
</Routes>
</BrowserRouter>
  );
  