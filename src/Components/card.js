import { useNavigate } from "react-router-dom";

const Card = ({ res, show }) => {
  const navigate = useNavigate();

  const redirectHandler = () => {
    navigate(`/restaurant/${res.info.id}`);
  };

  return (
    <div className="card" onClick={redirectHandler}>
      {/* ✅ Image properly screen ke hisaab se fit hogi */}
      <img
        alt={res.info.name}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${res.info.cloudinaryImageId}`}
      />

      <div className="card__details">
        <h3 className="card__name">{res.info.name}</h3>

        {show && (
          <>
            <div className="card__cuisines">
              {res.info.cuisines?.join(", ")}
            </div>
            <div className="card__price">{res.info.costForTwo}</div>
            <div className="card__info">
              <span className="card__rating">{res.info.avgRating} ⭐</span>
              <span className="card__time">
                {res.info.sla?.deliveryTime || "30"} mins
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
