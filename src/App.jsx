import Product from './pages/Product'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Products from './components/Products'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import { CartProvider } from './CartContext'

function App() {

  return (
    <CartProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/shop" element={<ProductList/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cont" element={<Contact/>}/>

      </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
