import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "./../Style/search.css";

const Search = () => {
  const { restaurants } = useOutletContext();
  const [query, setQuery] = useState("");

  if (!Array.isArray(restaurants)) {
    return <p>Loading restaurants...</p>;
  }

  const filteredRestaurants = restaurants.filter(
    (res) =>
      res.info.name.toLowerCase().includes(query.toLowerCase()) ||
      res.info.cuisines.some((cuisine) =>
        cuisine.toLowerCase().includes(query.toLowerCase())
      )
  );

  const CLOUDINARY_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

  return (
    <div className="search-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Restaurants and Food"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="search-icon">🔍</span>
      </div>

      {query === "" ? (
        <div className="suggestions">
          <h3>Popular Restaurants</h3>
          <div className="popular-list">
            {restaurants.slice(0, 8).map((res) => (
              <div key={res.info.id} className="popular-item">
                <img
                  src={
                    res.info.cloudinaryImageId
                      ? `${CLOUDINARY_URL}${res.info.cloudinaryImageId}`
                      : "https://via.placeholder.com/208"
                  }
                  alt={res.info.name}
                />
                <p>{res.info.name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="results">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((res) => (
              <div key={res.info.id} className="result-card">
                <img
                  src={
                    res.info.cloudinaryImageId
                      ? `${CLOUDINARY_URL}${res.info.cloudinaryImageId}`
                      : "https://via.placeholder.com/208"
                  }
                  alt={res.info.name}
                />
                <div>
                  <h4>{res.info.name}</h4>
                  <p>{res.info.cuisines.join(", ")}</p>
                  <p>{res.info.costForTwo}</p>
                  <p>⭐ {res.info.avgRating}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No results found for "{query}"</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
