import { Link } from "react-router-dom";
import Hero from '../../Components/Home/JS/Hero';
import HomeEvents from '../../Components/Home/JS/HomeEvents';
import HomeEpisodes from '../../Components/Home/JS/HomeEpisodes';
import HomeRadios from '../../Components/Home/JS/HomeRadios';
import HomeNews from '../../Components/Home/JS/HomeNews';

function Home() {
    return (
        
        <section className="sectionPage">
            <Hero /> 
            <HomeEvents />
            <HomeEpisodes />
            <HomeRadios />
            <HomeNews />
        </section>

    )
}

export default Home;