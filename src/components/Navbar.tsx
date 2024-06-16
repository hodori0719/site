import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navlink'>
                <NavLink to="/"><div className='activeDot'></div><div>About</div></NavLink>
            </div>
            <div className='navlink'>
                <NavLink to="/projects"><div className='activeDot'></div><div>Projects</div></NavLink>
            </div>
            <div className='navlink'>
                <NavLink to="/writing"><div className='activeDot'></div><div>Writing</div></NavLink>
            </div>
            <div className='navlink'>
                <NavLink to="/music"><div className='activeDot'></div><div>Music</div></NavLink>
            </div>
            <div className="blocker"></div>
        </div>
    )
}

export default Navbar;