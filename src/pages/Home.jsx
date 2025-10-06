import React, { useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(""); //controls what products are shown
  const productSectionRef = useRef(null);

  const handleSearchChange = (value) => {
    setSearchQuery(value);

    if (productSectionRef.current) {
      productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar onSearchChange={handleSearchChange} />
      <Slider />
      <Categories />
      <div ref={productSectionRef}>
        <Products searchQuery={searchQuery} />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
