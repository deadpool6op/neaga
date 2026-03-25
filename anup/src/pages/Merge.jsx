import React from 'react'
import { Link } from 'react-router'
import logoo from "../pages/logoo/a1.jpg"
import HomeBanner from './HomeBanner'
import Slider from './Slider'
import App from '../App'

const Merge = () => {
  return (
    <div>

      <nav>
        
          <ul className=' flex items-center bg-[grey] justify-around text-[chartreuse] text-[rgb(44,40,40)]  p-5  border-[2px]  gap-[50px]'>
            <li> <i className="fa-solid fa-shirt"></i></li>
            <Link to="/mens">
              <li className='mx-2 cursor pointer'>Mens </li>
            </Link>
            <Link to="/women">
              <li className='mx-2 cursor pointer'>Womens</li>
            </Link>
            <Link to="/kidswear">
              <li className='mx-2 cursor pointer'>kids wear</li>
            </Link>
            <Link to="/Mergeclone">
              <li className='mx-2 cursor pointer'>categories</li>
            </Link>
            <Link to="/Button">
              <button className='mx-2 cursor pointer'>login</button>
            </Link>
            <Link to="/Button2">
              <button className='mx-2 cursor pointer'>register</button>
            </Link>
            <Link to="/HomeBanner">
              <button className='mx-2 cursor pointer'>Homebanner</button>
            </Link>
          </ul>
          
        
      </nav>   
    <App/>
    </div>

  )
}

export default Merge;