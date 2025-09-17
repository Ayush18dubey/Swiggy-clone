import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import "./../Style/list.css";

const RestaurantList = () => {
  const { restaurants, loading } = useOutletContext();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this restaurant?")) {
      await fetch(`http://localhost:9000/api/v1/restaurant/${id}`, {
        method: "DELETE",
      });
      window.location.reload();
    }
  };

  if (loading) return <div className="restaurant">Loading...</div>;

  return (
    <div className="restaurant">
      <div>
        <h2>Restaurant List</h2>
        <button onClick={() => navigate("/create")}>+ Add Restaurant</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Area</th>
            <th>Rating</th>
            <th>Cuisines</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((res) => (
            <tr key={res._id}>
              <td>{res.name}</td>
              <td>{res.areaName}</td>
              <td>{res.avgRating}</td>
              <td>{res.cuisines?.join(", ")}</td>
              <td>
                <button onClick={() => handleDelete(res._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
