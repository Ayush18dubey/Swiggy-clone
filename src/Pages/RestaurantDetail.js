import { useParams, useOutletContext } from "react-router-dom";

const RestaurantDetail = () => {
  const { id } = useParams();
  const { restaurants, addItem } = useOutletContext();

  // particular restaurant nikal
  const restaurant = restaurants.find((res) => res.info.id === id);

  if (!restaurant) return <p>Restaurant not found</p>;

  return (
    <div className="restaurant-detail">
      <h2>{restaurant.info.name}</h2>
      <p>
        {restaurant.info.avgRating} ⭐ | {restaurant.info.costForTwo}
      </p>
      <p>{restaurant.info.cuisines.join(", ")}</p>
      <hr />

      <h3>Recommended</h3>
      {restaurant.menu && restaurant.menu.length > 0 ? (
        restaurant.menu.map((item) => (
          <div key={item.id} className="menu-item">
            <div className="menu-info">
              <h4>{item.name}</h4>
              <p>₹{item.price / 100}</p>
              <p className="menu-desc">{item.description}</p>
            </div>
            <div className="menu-action">
              <img src={item.image} alt={item.name} className="menu-img" />
              <button className="add-btn" onClick={() => addItem(item)}>
                Add
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No menu available</p>
      )}
    </div>
  );
};

export default RestaurantDetail;
