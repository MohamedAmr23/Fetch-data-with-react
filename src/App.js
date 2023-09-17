import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ProductsList from "./components/ProductsList";
import { Route,Routes } from "react-router-dom";
import About from "./components/About";
import ProductDetails from "./ProductDetails";
function App(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<>  <Slider/>
    <ProductsList/>
    </>}/>
    <Route path="about" element={<About/>}/>
    <Route path="product/:productId" element={<ProductDetails/>}/>
    </Routes>
  
    
    </>
   
  )
}
export default App