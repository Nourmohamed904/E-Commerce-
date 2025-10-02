import Product from './pages/Product'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Products from './components/Products'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Product/>}/>
      </Routes>
    </Router>
  )
}

export default App
