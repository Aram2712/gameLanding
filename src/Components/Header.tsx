
import './component.scss';
import { useGlobalContext } from '../context';
import { Link } from 'react-scroll';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {

    const { headerData } = useGlobalContext(); 
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    return(
        <div className={'header-container'}>
            <h2 className={'headerTitle'}>Test Test</h2>
            <div className='navigationContainer'>
                {
                    headerData.map((item) => (
                        <Link to = {item.link} smooth={true} duration={500} key = {item.id} className='navigationItem'>{item.title}</Link>
                    ))
                }
            </div>
            <button className='loginBtn'>
                Login in     
            </button>
            <GiHamburgerMenu
                style = {{
                    color: '#EF6731',
                    fontSize: '40px'
                }}
                onClick={() => setOpenMobileMenu(true)}
                className='burgerIcon'
            />
            <MobileMenu
                openMobileMenu = {openMobileMenu}
                setOpenMobileMenu = {setOpenMobileMenu}
            />
        </div>
    )
}

export default Header