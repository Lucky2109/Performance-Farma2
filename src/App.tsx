
import React from 'react';



import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import Footer from './components/footer/Footer';






function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/categoria" element={<ListaCategorias />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}
export default App;