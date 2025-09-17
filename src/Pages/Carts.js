import { useOutletContext } from "react-router-dom";
import "./../Style/cart.css";
import EmptyCart from "../Components/EmptyCart";
import CartItems from "../Components/CartItems";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cartItems, addItem, removeItem } = useOutletContext();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity * item.defaultPrice;
    });
    setTotalPrice(total / 100);
  }, [cartItems]);

  const handlePayment = () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded!");
      return;
    }

    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", //  Razorpay test key (demo ke liye)
      amount: parseInt(totalPrice * 100), // paisa me amount
      currency: "INR",
      name: "E-Bharat",
      description: "Test Transaction",
      image: "https://razorpay.com/favicon.png",
      handler: function (response) {
        alert("✅ Payment Successful! ID: " + response.razorpay_payment_id);
        console.log(response);
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: { color: "#3399cc" },
      method: {
        upi: true,
        card: true,
        netbanking: true,
        wallet: true,
        emi: true,
        paylater: true,
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartItems
          cartItems={cartItems}
          addItem={addItem}
          removeItem={removeItem}
          totalPrice={totalPrice}
          handlePayment={handlePayment}
        />
      )}
    </div>
  );
};

export default Cart;
