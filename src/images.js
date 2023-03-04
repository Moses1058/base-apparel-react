import heroDesktop from './assets/hero-desktop.jpg';
import heroMobile from './assets/hero-mobile.jpg';


export default function HeroImage() {
    return (
        <div>
            <DesktopImage />
            <MobileImage />
        </div>

    )
}
const DesktopImage = () => {
    return (
        <img className="hero hero_desktop" src={heroDesktop} alt="hero" />
    );
}
const MobileImage = () => {
    return (
        <img className="hero hero_mobile" src={heroMobile} alt="hero" />
    );
}
