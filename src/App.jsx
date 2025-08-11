
import './App.scss';
import MainSection from './Sections/MainSections.jsx';
import ChooseUs from './Sections/ChooseUs.jsx';
import VideoSection from './Sections/VideoSection.jsx';
import FAQ from './Sections/FAQ.jsx';
import Footer from './Sections/Footer.jsx';

function App() {
    return(
        <div className = 'App'>
            <MainSection/>
            <ChooseUs/>
            <VideoSection/>
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default App;