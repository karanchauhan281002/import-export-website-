
// import './App.css';
import SliderComponent, { Carousel } from './Component/Carousel';
import Service1 from './Component/Services1';
import LogoHeader from './Component/LogoHeader';
import Navbar from './Component/Navbar';
import Testimonial from './Component/Testimonial';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import BlogCompp from './Component/Blog Assests/BlogCompp';
import FrameComponent from "./pages2/FrameComponent";
import "./Component/global-copy.css";


function App() {
  return (
    
    <>
    <LogoHeader/>
    <Navbar/>
   
    
    <Carousel/>
    <Service1/>
    <FrameComponent/>
    <Testimonial/>
    <Contact/>
    <BlogCompp/>
    <Footer/></>
  );
}

export default App;
