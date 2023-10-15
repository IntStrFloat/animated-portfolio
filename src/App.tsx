import './app.scss';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="divi">
      <section id="Homepage">
        <Navbar />
      </section>
      <section>Parallax</section>
      <section id="Services">Services</section>
      <section>Parallax</section>
      <section id="Portfolio1">Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
