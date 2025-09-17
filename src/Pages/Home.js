import { useOutletContext, useNavigate } from "react-router-dom";
import Carousel from "../Components/Carousuel";
import "./../Style/home.css";
import Card from "../Components/card";

const Home = () => {
  const { restaurants } = useOutletContext();
  const navigate = useNavigate();

  return (
    <div className="home">
      <Carousel />
      <h2 className="home__heading">
        Restaurants with online food delivery in Noida
      </h2>

      <div className="home__card-container">
        {Array.isArray(restaurants) && restaurants.length > 0 ? (
          restaurants.map((res) => (
            <Card key={res.info.id} show={true} res={res} />
          ))
        ) : (
          <p>No restaurants available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
