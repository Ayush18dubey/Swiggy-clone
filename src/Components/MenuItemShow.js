const MenuItemShow = ({ r, addItem, removeItem, cartItems }) => {
  const info = r.card?.info || {};
  const itemId = info.id;

  // check if item is already in cart
  const cartItem = cartItems.find((item) => item.id === itemId);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  // price
  const price = info.price
    ? info.price / 100
    : info.defaultPrice
    ? info.defaultPrice / 100
    : 0;

  // image
  let imageSrc = "/images/placeholder.png";
  if (info.imageId) {
    imageSrc = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${info.imageId}`;
  } else if (info.imgName) {
    imageSrc = `/images/${info.imgName}`;
  }

  return (
    <div className="restaurant__menu-item-card" key={itemId}>
      {/* Left side - Text */}
      <div className="restaurant__menu-item-info">
        <p className="restaurant__menu-item-name">{info.name}</p>
        <p className="restaurant__menu-item-price">₹ {price}</p>
        {info.description && (
          <p className="restaurant__menu-item-desc">{info.description}</p>
        )}
      </div>

      {/* Right side - Image + Add/Counter */}
      <div className="restaurant__menu-item-action">
        <div className="menu-img-wrapper">
          <img
            src={imageSrc}
            alt={info.name}
            onError={(e) => (e.target.src = "/images/placeholder.png")}
          />
          {quantityInCart > 0 ? (
            <div className="menu-qty-controls">
              <button onClick={() => removeItem(info)}>-</button>
              <span>{quantityInCart}</span>
              <button onClick={() => addItem(info)}>+</button>
            </div>
          ) : (
            <button
              className="menu-add-btn"
              onClick={() => addItem(info)}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemShow;
