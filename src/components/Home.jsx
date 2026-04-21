import './Home.css';

function Home() {
    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="home-container" id='home'>
            <div className="home-background"></div>
            <div className="home-content">
                <h1>College of Applied Science</h1>
                <p>Malampuzha</p>
                <button onClick={handleContactClick} className="cta-button">Explore Programs</button>
            </div>
        </div>
    );
}   

export default Home;