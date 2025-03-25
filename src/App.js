
import './App.css';
import Main from './components/Main.js';
import Header from "./components/Header.js"
import Button from "./components/Button.js"
import About from './components/About.js';
import Contact from './components/contatos.js';
function App() {
  return (
    <div className="App">
      <Header/>

      <div className="select">
        <Button text="Cripitografar"/>
        <Button text="Descripitografar"/>
      </div>

      <Main tipo ="c" />

      <Main tipo ="d" />
      <Contact/>
      <About/>
    </div>
  );
}

export default App;
