import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

const EventForms = () => {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <form class="Event-Form" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      <br />
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <p>This field is required</p>}

      <input type="submit" />
    </form>
  );
};
export default EventForms;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
