import { useOutletContext, useParams } from "react-router-dom";
import "./../Style/restaurant.css";
import { useEffect, useState } from "react";
import menuData from "../Data/menuData.json";

const Restaurant = () => {
  const { resId } = useParams();
  const { cartItems, addItem, removeItem, restaurants } = useOutletContext();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const found = restaurants.find((i) => i.info.id.toString() === resId);
    setRestaurant(found?.info);
    setMenu(menuData); // ✅ Menu items ka JSON
  }, [resId, restaurants]);

  if (!restaurant) return <p>Loading...</p>;

  return (
    <div className="restaurant">
      {/* ✅ Breadcrumb */}
      <div className="restaurant__breadcrumb">
        Home / Noida / {restaurant.name}
      </div>

      <div className="restaurant__container">
        {/* ✅ Restaurant Name */}
        <div className="restaurant__info">
          <h1>{restaurant.name}</h1>
        </div>

        {/* ✅ Tabs */}
        <div className="restaurant__services">
          <p className="active">Order Online</p>
          <p>Dineout</p>
        </div>

        {/* ✅ Restaurant Info Section */}
<div className="restaurantInfo">
  <div className="restaurantInfoContainer">
    
    {/* 🔸 Alert box */}
    <div className="primary">
      Uh-oh! Outlet is not accepting orders at the moment. 
      They should be back by <strong>11:00 AM tomorrow</strong>
    </div>

    {/* 🔸 Details Box */}
    <div className="secondary">
      {/* Rating + Cost */}
      <p className="rating-cost">
        <strong>{restaurant.avgRating} ({restaurant.totalRatings || "100+"} ratings)</strong> •{" "}
        <strong>{restaurant.costForTwo}</strong>
      </p>

      {/* Cuisines */}
      <p className="cuisines">
      {restaurant.cuisines?.join(", ")} 
      </p>

      {/* Outlet Info */}
      <p className="outlet">
        <strong>Outlet</strong> { "Crossing Republic"}
      </p>

      {/* Closed Status */}
      <p className="closed-status">
        Closed & not delivering
      </p>
    </div>
  </div>
</div>
</div>
      {/* ✅ Menu Categories */}
      <div className="restaurant__container">
        <div className="restaurant__menu">
          {menu.map((category, cIdx) => (
            <div key={cIdx} className="restaurant__menu-category">
              <h2 className="foodCat">
                {category.title} ({category.itemCards.length})
              </h2>

              <div className="restaurant__menu-items">
                {category.itemCards.map((item) => {
                  const cartItem = cartItems.find((ci) => ci.id === item.id);
                  const quantity = cartItem ? cartItem.quantity : 0;

                  return (
                    <div key={item.id} className="restaurant__menu-item-card">
                      {/* Left Info */}
                      <div className="restaurant__menu-item-info">
                        <p className="restaurant__menu-item-name">{item.name}</p>
                        <p className="restaurant__menu-item-price">
                          ₹ {(item.price || item.defaultPrice) / 100}
                        </p>
                        {item.description && (
                          <p className="restaurant__menu-item-desc">
                            {item.description}
                          </p>
                        )}
                      </div>

                      {/* Right: Image + Button/Controls */}
                      <div className="restaurant__menu-item-action">
                        <div className="menu-img-wrapper">
                          <img
                            src={`/images/${item.imgName}`}
                            alt={item.name}
                            onError={(e) =>
                              (e.target.src = "/images/placeholder.png")
                            }
                          />

                          {quantity > 0 ? (
                            <div className="menu-qty-controls">
                              <button onClick={() => removeItem(item)}>-</button>
                              <span>{quantity}</span>
                              <button onClick={() => addItem(item)}>+</button>
                            </div>
                          ) : (
                            <button
                              className="menu-add-btn"
                              onClick={() => addItem(item)}
                            >
                              Add
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
