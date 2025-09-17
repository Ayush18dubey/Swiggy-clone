import MenuItemShow from "./MenuItemShow";

const MenuItem = ({ res, cartItems, addItem, removeItem }) => {
  const title = res.title || "Menu";

  return (
    <div className="restaurant__menu-category">
      {/* Category Title */}
      <div className="restaurant__menu-title">
        <p>
          {title} ({res.itemCards?.length || 0})
        </p>
      </div>

      {/* Category Items */}
      <div className="restaurant__menu-items">
        {res.itemCards && res.itemCards.length > 0 ? (
          res.itemCards.map((r) => (
            <MenuItemShow
              key={r.card?.info?.id || r.id} // unique key
              r={r}
              cartItems={cartItems}
              addItem={addItem}
              removeItem={removeItem}
            />
          ))
        ) : (
          <p className="restaurant__no-items">No items available</p>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
