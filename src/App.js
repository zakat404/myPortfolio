import './App.css';
import  About  from './Components/About/About';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import  TypingText  from './Components/MainText/TypingText';
import { Works } from './Components/Works/Works';
function App() {
  return (
    <div >
      <Header />
      <TypingText />
      <About />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
