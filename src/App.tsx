
import './App.scss';
import MainSection from './Sections/MainSections.tsx';
import ChooseUs from './Sections/ChooseUs.tsx';
import VideoSection from './Sections/VideoSection.tsx';
import FAQ from './Sections/FAQ.tsx';
import Footer from './Sections/Footer.tsx';

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