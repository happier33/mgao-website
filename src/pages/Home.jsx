
import TopBar from "../components/TopBar";
import LogoSection from "../components/LogoSection";
import MainNav from "../components/MainNav";
import Hero from "../components/Hero";
import WelcomeSection from "../components/WelcomeSection";
import AboutCollege from "../components/AboutCollege";
import NewsAnnouncements from "../components/NewsAnnouncements";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <TopBar />
            <LogoSection />
            <MainNav />
            <Hero />
            <WelcomeSection />
            <AboutCollege />
            <NewsAnnouncements />
            <Footer />
        </>
    );
}

export default Home;
