import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import MainSection from "./Components/MAinSection/MainSection";
import Resume from "./Components/Resume/Resume";
import Aphorism from "./Components/Aphorism/Aphorism";
import Teammates from "./Components/Teammates/Teammates";
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Header/>
      <MainSection/>
      <Resume/>
      <Aphorism/>
      <Teammates/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
