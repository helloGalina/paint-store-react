import "./styles/reset.css";
import "./styles/style.css";
import Header from "./components/Header";
import Products from "./components/Products";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Products id="catalog"/>
      <About id="intro"/> 
      <Gallery id="gallery"/>
      <Contacts id="contacts"/>
      <Footer/>
    </>
  );
}

export default App;
