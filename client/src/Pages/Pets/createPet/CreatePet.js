import React, { useState } from "react";
import Form from "../../../components/Form/Form";
import { addPet } from "../../../services/petServices";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../createPet/createPet.css";

function CreatePet() {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const switchToPets= () => {
    navigate('/pets')
  }

  const onSubmit = (data) => {
    setLoading(true);
    const newPet = {
      name: data.name,
      age: data.age,
      type: data.type,
      color: data.color,
      created_at: new Date().toString(),
    };

    addPet(newPet).then((res) => {
      setTimeout(() => {
        if (res.data.success) 
          setLoading(false);
      }, [1000]);
    });
  };

  return (
  <>
  {loading ? 
  <CircularProgress /> : <Form className="form-container" onSubmit={onSubmit} />
  } 
  <button className="button-pets" onSubmit={switchToPets}>Show Pets</button>
  </>);
}

export default CreatePet;
