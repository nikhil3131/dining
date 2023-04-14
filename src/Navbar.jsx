import { useState } from 'react'
import logo from './assets/images/gericht.png'
import open from './assets/images/icons8-menu-squared-50.png'
import close from './assets/images/icons8-close-64.png'
import './Navbar.css'

export default function Navbar(){
    const[toggle,setToggle] = useState(false)
    return(
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={logo} alt='app logo'/>
            </div>
            <ul className='app__navbar-links'>
                <li className='p__opensans'><a href='#home'>Home</a></li>
                <li className='p__opensans'><a href='#about'>About</a></li>
                <li className='p__opensans'><a href='#menu'> Menu</a></li>
                <li className='p__opensans'><a href='#awards'>Awards</a></li>
                <li className='p__opensans'><a href='#contact'>Contact</a></li>
            </ul>
            <div className='app__navbar-login'>
                <a href="#login" className='p__opensans'>LogIn / Register</a>
                <div />
                <a href="#book" className='p__opensans'>Book Table</a>
            </div>

            {/* navigaton bar for small screen device */}
            <div className='app__navbar-samllerscreen'>
                <GitHamburgerMenu onClick={()=>{setToggle(true)}}/>

                {toggle && (
                    <div className='app__navbar-smallscreen_overlay flex__centre slide-bottom'>
                        <CloseingIcon onClick={()=>{setToggle(false)}}/>
                        <ul className='app__navbar-smallscreen-links'>
                            <li className='p__opensans'><a href='#home'>Home</a></li>
                            <li className='p__opensans'><a href='#about'>About</a></li>
                            <li className='p__opensans'><a href='#menu'> Menu</a></li>
                            <li className='p__opensans'><a href='#awards'>Awards</a></li>
                            <li className='p__opensans'><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                )}
                


            </div>
        </nav>
    )
}

function GitHamburgerMenu(prop){
    return(
        <nav className='hamburger' onClick={()=>{prop.onClick()}}>
            <img src={open}/>
        </nav>
    )
}

function CloseingIcon(prop){
    return(
        <nav className='closinghamburgerIcon' onClick={()=>{prop.onClick()}}>
            <img src={close} style={{width:50}}/>
        </nav>
    )
}