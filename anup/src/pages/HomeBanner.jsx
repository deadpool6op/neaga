import React from 'react'
import { Link } from 'react-router'
import logoo from "..//pages/logoo/a1.jpg"
import logoo2 from "..//pages/logoo/a2.jpg"

import logoo3 from "..//pages/logoo/a3.jpg"
import logoo4 from "..//pages/logoo/a4.jpg"

const HomeBanner = () => {
  return (
<div>
  <nav className='m-[0.5%]'>
<ul className= 'flex items-center bg-[grey] justify-around text-[chartreuse] text-[rgb(44,40,40)] m-[5px] p-[5px] border-[2px]  gap-[300px] w-[510]; height-[612];'>
<li>Baggy jeans</li>
<li>straight jeans</li>
<li>denim fit</li>
<li>Bell Bottom</li></ul>
  </nav>
  <section >
    <div className=' @apply flex justify-between w-[1200px]  m-[5%] p-[3%] gap-[150px]
  align-items: centre'>
      <div>
        <div>
        <img src={logoo} alt='a1.jpg'/></div>
        <div><h>lenth 32 korean jeans</h></div>
        </div>

      <div>
      <div><img src={logoo2} className='a2.jpg '/></div>
      <div><h>length 34 baggy shit</h></div>
      </div>

<div>
      <div><img src={logoo3} className='a3.jpg'/></div>
<div><h>length 36 chinese fit nigga</h></div>
</div>
<div>
      <div><img src={logoo4} className='a4.jpg'/></div>
<div><h>acid fit black denim </h></div>
</div>
    </div>
  </section>
</div>

  )
}

export default HomeBanner 