import './Navibar.css';

function Navibar() {
  return (
    <header className="navibar">
      <div className="navibar-inner">
        <div className="nav-brand">
          <img src="/images/collegelogo.jpg.jpg" alt="College Logo" className="nav-logo" />
          <div>
            <span className="nav-brand-title">College of Applied Science</span>
            <span className="nav-brand-subtitle">Malampuzha</span>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#course">Course</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navibar;