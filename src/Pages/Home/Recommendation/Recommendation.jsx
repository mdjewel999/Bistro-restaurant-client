import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Recommendation = () => {
      const [recommendation, setRecommendation] = useState([]);
      const [loading, setLoading] = useState(true); 
      const [error, setError] = useState(null); 
    
      useEffect(() => {
        fetch("chefsCard.json")
          .then((res) => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then((data) => {
            setRecommendation(data);
            setLoading(false);
          })
          .catch((err) => {
            setError(err);
            setLoading(false); 
          });
      }, []);
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    
  return (
    <section>
      <SectionTitle
        subhedding={"Should Try"}
        hedding={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-5">
      {recommendation.map((item) => (
        <div key={item._id} className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={item.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p>{item.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">ORDER Now</button>
          </div>
        </div>
      </div>
      ))}
      </div>
      <button className="">Read More</button>
    </section>
  );
};

export default Recommendation;
