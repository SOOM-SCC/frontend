import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MainSection from "../components/MainSection";
import "../App.css";

function MainPage() {
    return (
        <div className="page-root">
            <Header />
            <HeroSection />
            <MainSection />
        </div>
    );
}

export default MainPage;
