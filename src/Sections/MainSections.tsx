
import './Sections.scss';
import Header from '../Components/Header.tsx';
import mainImage from '../assets/main.svg'
import down from '../assets/down.svg'
import { Link } from 'react-scroll';

function MainSection() {
   
    return(
        <section className='mainSection'>
            <Header/>
            <div className='titleAndMainImageBox'>
                <h1 className='mainTitle'>
                    Test Test Test Test Test Test Test Test
                </h1>
                <img src = {mainImage} alt='main image' className='mainImage'/>
            </div>
            <Link className='scrollBellowBox' to = "features" smooth={true} duration={500}>
                <p>Scroll down below</p>
                <img src = {down} className='downArrow'/>
            </Link>
        </section>
    )
}

export default MainSection