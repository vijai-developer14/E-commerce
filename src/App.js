import './App.css';

import Homepage1 from './pages/Homepage1';
import Footer from "./components/Footer";

import { Routes, Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import Shoppage from './pages/Shoppage';
import Cartpage from './pages/Cartpage';
import NewHeader from './components/NewHeader';
import ProductDetails from './pages/ProductDetails';
import'./styles/common.css'
import Animation_imapct from './components/Animation_imapct';
import ScrolltoTop from './components/ScrolltoTop';
import Blogs from './pages/Blogs';


function App() {
  return (
 
    <div className="App">
  
  
<NewHeader/>
<ScrolltoTop/>
<Routes>

  <Route path='/' element={<Homepage1/>}/>
  <Route path='/ContactUs' element={<ContactUs/>}/>
  <Route path='/Shoppage' element={ <Shoppage/>}/>
  <Route path='/Cartpage' element={<Cartpage/>}/>
 
 <Route path="/product/:productId" element={<ProductDetails />} />
 <Route path='/Animation_imapct' element={<Animation_imapct/>}/>
 <Route path='/Blogs' element={  <Blogs/>}/>

</Routes>


   <Footer />
    </div>
  );
}

export default App;
