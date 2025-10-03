import Product from './pages/Product'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Products from './components/Products'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/signin" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
