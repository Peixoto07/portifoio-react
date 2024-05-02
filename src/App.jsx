
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route } from 'react-router-dom';
import Projetos from './pages/Projetos';
import Home from './pages/Home';
// import ScrollToTop from './components/ScrollToTop';

function App() {


  return (
    <div >
      <Header />
        <section>
      <Routes  >
        <Route  path='/' element={<Home />} />
        <Route path='/projetos' element= {<Projetos />} />
      </Routes>
        </section>
      <Footer />
    </div>
  );
}

export default App;
