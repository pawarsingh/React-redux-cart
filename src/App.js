
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Nav from './components/Nav';
import Allproduct from './components/Allproduct';
import Cart from './components/Cart.js';
function App() {
  return (
   <>
   <BrowserRouter>
     <Nav></Nav>
     <Routes>
         <Route path='/' element={<Allproduct></Allproduct>}></Route>
         <Route path='/cart' element={<Cart></Cart>}></Route>
     </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
