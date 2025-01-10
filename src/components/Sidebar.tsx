import React from 'react'
import {Link} from 'react-router'

export function Sidebar(){
  return(
    <div className='w-4.5'>
        <div>
          <Link to='/dashboard'>
            <img src="" alt="" />
            <p>Dashboard</p>
          </Link>
          <Link to='/field'>
            <img src="" alt="" />
            <p>Field Details</p>
          </Link>
          <Link to='/crop'>
            <img src="" alt="" />
            <p>Crop Details</p>
          </Link>
          <Link to='/staff'>
            <img src="" alt="" />
            <p>Staff Details</p>
          </Link>
          <Link to='/equipment'>
            <img src="" alt="" />
            <p>Equipment Details</p>
          </Link>
          <Link to='/log'>
            <img src="" alt="" />
            <p>Log Details</p>
          </Link>
          <Link to='/Vehicle'>
            <img src="" alt="" />
            <p>Vehicle Details</p>
          </Link>
        </div>
    </div>
  )
}