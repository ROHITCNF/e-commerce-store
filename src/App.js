import React from 'react';
//Router
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

//components
import SideBar from  './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const App = () => {
  return <div className="overflow-hidden">
   <Router>
   <Header/>
    <Routes>
     <Route path ='/' element={<Home/>}/>
     <Route path='/product/:id' element={<ProductDetails/>}/>
    </Routes>
    <SideBar />
    <Footer/>
   </Router>
  </div>;
};

export default App;
