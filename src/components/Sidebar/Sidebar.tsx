import React from 'react'
import {Link} from 'react-router'
import './Sidebar.css'
import { MdDashboard } from "react-icons/md";
import { GiField } from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiShovelFill } from "react-icons/pi";
import { MdStickyNote2 } from "react-icons/md";
import { FaTruck } from "react-icons/fa";

export function Sidebar(){
  return(
    <div className='w-[18%] min-h-screen border-t-0 border border-gray-400 text-[max(1vw,10px)]'>
        <div className='pt-12 pl-[20%] flex flex-col gap-5'>
          <Link to='/dashboard' className='custom-link'>
            <MdDashboard/>
            <p>Dashboard</p>
          </Link>
          <Link to='/field' className='custom-link'>
            <GiField />
            <p>Field Details</p>
          </Link>  
          <Link to='/crop' className='custom-link'>
            <RiPlantFill/>
            <p>Crop Details</p>
          </Link>
          <Link to='/staff' className='custom-link'>
            <FaPeopleGroup/>
            <p>Staff Details</p>
          </Link>
          <Link to='/equipment' className='custom-link'>
            <PiShovelFill/>
            <p>Equipment Details</p>
          </Link>
          <Link to='/log' className='custom-link'>
            <MdStickyNote2/>
            <p>Log Details</p>
          </Link>
          <Link to='/Vehicle' className='custom-link'>
            <FaTruck/>
            <p>Vehicle Details</p>
          </Link>
        </div>
    </div>
  )
}