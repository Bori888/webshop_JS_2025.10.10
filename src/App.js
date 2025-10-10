import './App.css';
import { kepLista } from './components/adatok';
import Footer from './components/Footer';
import Kepek from './components/Kepek';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Harry Potter Figurák</h1>

      </header>
      <nav>
        <Nav />

      </nav>
      <article>
        <Kepek lista ={kepLista}/>


      </article>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
