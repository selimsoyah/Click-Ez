import React from 'react';
import {useState} from 'react';
import logo from './images/Logo.png'
import { FaBars,FaTasks } from 'react-icons/fa';
import { BiHome,BiLogOut } from 'react-icons/bi';
import { GrTasks,GrView } from 'react-icons/gr';
 
import {Link} from 'react-router-dom'
import './side.css'
const SideBar = () => {
    const menuItems = [
        {
            text:"Home",
            logo:<BiHome />,
            path:"/logIn"
        },
        {
            text:"progression",
            logo:<GrTasks />,
            path:"/logIn"
        },
        {
            text:"tasks",
            logo:<FaTasks />,
            path:"/logIn"
        },
        {
            text:"views",
            logo:<GrView />,
            path:"/logIn"
        },
        {
            text:"Log Out",
            logo:<BiLogOut />,
            path:"/"
        }
    ]
    const [toggle,setToggle]= useState(true)
    const open_close = ()=>{
        if (toggle){
            setToggle(false)
        }
        else{
            setToggle(true)
        }
    }
    return (
        <div>
            <div className={toggle ? 'mainBoxAf' : 'mainBoxBf'}>
                    <div className='test'>
                        <img  style={{ display : toggle ? "none" : "block"}} className="mainLogo" src={logo} />
                        <div className='burger'>
                            <FaBars onClick={open_close}/>
                        </div>
                    </div>
                    <h2 className={ toggle ? "af" : "bf"}>Salim's Workspace</h2>
                      {menuItems.map((items,id)=>(
                            <div className='links' key={id}>
                                <Link to={items.path} className='one'>{items.logo}</Link>
                                <Link to={items.path} className='two' style={{ display : toggle ? "none" : "block"}}>{items.text}</Link>
                            </div>
                      ))}
                   
            </div>
        </div>
    );
};

export default SideBar;