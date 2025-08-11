
import './Sections.scss';

function Footer() {

    const year = new Date().getFullYear();

    return(
        <section className='footerSection'>
            <span>© {year} All rights reserved</span>
        </section>
    )
}

export default Footer