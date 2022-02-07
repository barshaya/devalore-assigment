import React from "react";
import { useForm } from "react-hook-form";

function Form({ onSubmit, className }) {
  const { register, handleSubmit } = useForm();

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name"
        {...register("name", { required: true, max: 25, maxLength: 80 })}
      />
      <input
        type="number"
        placeholder="Age"
        {...register("age", { required: true })}
      />
      <select {...register("type", { required: true })}>
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
        <option value="Horse">Horse</option>
        <option value="Other">Other</option>
      </select>
      <div>
        <input
          {...register("color", { required: true })}
          type="radio"
          value="Black"
          checked
        />
        <label for="Black">Black</label>

        <input
          {...register("color", { required: true })}
          type="radio"
          value="White"
        />
        <label for="White">White</label>
      </div>
      <input type="submit" value="Create Pet" />
    </form>
  );
}

export default Form;
