import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Counts from './components/Counts';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="topportion">
    <NavBar/>
    <Hero/>
    </div>
    <About/>
    <Counts/>
    <Services/>
    <Features/>
    <Testimonials/>
    <Portfolio/>
    <Pricing/>
    <Contact/>
    <Footer/>
    
    </>
  );
}

export default App;
