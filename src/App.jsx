import Navibar from "./components/Navibar";
import Home from "./components/Home";
import About from "./components/About";
import Stats from "./components/Stats";
import Course from "./components/Course";
import Testimonials from "./components/Testimonials";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Home />
      <About />
      <Stats />
      <Course />
      <Testimonials />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;