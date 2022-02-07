import React, { useEffect, useState } from "react";
import Pet from "../../components/PetCard";
import { getPets } from "../../services/petServices";
import './Pets.css'

function Pets() {
  const [pets, setPets] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getPets().then((res) => {
      const data = res.data;
      setPets(data);
      console.log('change')
    });
  }, []);


  useEffect(() => {
  setTotal(pets.length);
  }, [pets]);

  return (
    <>
      {pets&& <p className="pets-total">total : {total}</p>}    
      {pets &&
        pets.map((pet) => {
          return <Pet key={pet._id} pet={pet}/>;
        })}
    </>
  );
}

export default Pets;
