import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Common/Header";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchrestaurants = async () => {
      try {
        const response = await fetch("http://localhost:3000/Restaurant.json");
        if (response.ok) {
          const data = await response.json();
          setRestaurants(data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchrestaurants();
  }, []);

  // ✅ Add Item
  const addItem = (item) => {
    const existingIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id   // <-- _id ❌  id ✅
    );
    if (existingIndex !== -1) {
      const updateCart = [...cartItems];
      updateCart[existingIndex].quantity += 1;
      setCartItems(updateCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // ✅ Remove Item
  const removeItem = (item) => {
    const existingIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id   // <-- _id ❌  id ✅
    );
    if (existingIndex !== -1) {
      const updateCart = [...cartItems];
      if (updateCart[existingIndex].quantity > 1) {
        updateCart[existingIndex].quantity -= 1;
      } else {
        updateCart.splice(existingIndex, 1);
      }
      setCartItems(updateCart);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="app-container">
      <Header cartItems={cartItems} />
      <div className="main-content">
        <Outlet
          context={{
            restaurants,
            addItem,
            cartItems,
            removeItem,
            clearCart,
            setRestaurants,
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
