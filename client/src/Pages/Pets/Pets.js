import React, { useEffect, useState } from "react";
import Pet from "../../components/PetCard";
import { getPets } from "../../services/petServices";
import "./Pets.css";

function Pets() {
  const [pets, setPets] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalAge, setTotalAge] = useState(0);

  const fetchData = async () => {
    try {
      await getPets().then((res) => {
        const data = res.data;
        setPets(data);
        console.log("change");
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if(pets.length>0){
    setTotal(pets.length);
    
    let sum = pets.reduce((prev, cur) => prev + (cur.age || 0), 0);
    setTotalAge(sum)
    }
  }
  , [pets]);

  return (
    <div className="pets-container">
      {pets && (
        <>
          <h2>total : {total}</h2>
          <h2>totalAge : {totalAge}</h2>
        </>
      )}
      {pets &&
        pets.map((pet) => {
          return <Pet key={pet._id} pet={pet} />;
        })}
    </div>
  );
}

export default Pets;
