import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./Pages/Books";
import { books } from "./data";
import BooksInfo from "./Pages/BooksInfo";
import Cart from "./Pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
  setCart([...cart, book])
}

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={<BooksInfo books={books} addToCart={addToCart} />}
          />
          <Route path="/cart" element={<Cart books={books} cart={cart}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
