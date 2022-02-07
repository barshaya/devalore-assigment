import React, { useEffect, useState } from "react";
import Pet from "../../components/PetCard";
import { getPets } from "../../services/petServices";

function Pets() {
  const [pets, setPets] = useState([]);

  //   for (let i = 0; i < pets.length; i++) {
  //     total.push(pets[i].age);
  //   }

  useEffect(() => {
    getPets().then((res) => {
      const data = res.data;
      setPets(data);
    });
  }, []);
  return (
    <div>
      {pets &&
        pets.map((pet) => {
          return <Pet key={pet._id} pet={pet}/>;
        })}
    </div>
  );
}

export default Pets;
