import React from 'react'
import reactlogo from './images/reactlogo.jpg'

function Navbar(){
    return (
        <nav className='navcontainer'>
            <div className='imgcontainer'>
                <img src={reactlogo} alt="reactlogo"/>
                <h3 className='medfont'>ReactFacts</h3>
            </div>
            <h4 className='smallfont'>React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar