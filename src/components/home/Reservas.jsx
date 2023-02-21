import NavBar from "../core/NavBar";
import { ThemeContext } from "../..";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import "./Reservas.css"
function Reservas() {
  const {
    register,
    handleSubmit,
    formState: { errors },
/*     setError,
 */  } = useForm();

  
  /*  React.useEffect(() => {
    setError("hora", {
      types: {
        min: "the value is inferior to 0",
        max: "the value is superior to 23",
      },
    });
  }, [setError]); */
  const [value, setValue] = useState(null);

  const onSubmit = (data) => { 
    console.log(data)
    fetch("https://formsubmit.co/anfifus@gmail.com",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
       name: "FormReservas",
       message: "Hello this is from reservas of the restaurant"
      })
    }).then(response => response.json())
      .then(data=> console.log(data))
      .catch(error => console.log(error));
  }
 
  return (
    <section id="Reservation">
      <header className="App-header">
        <NavBar />
      </header>
      <section id="Contact">
        <ThemeContext.Consumer>
          {({ theme, changeTheme }) => (
            <Button onClick={changeTheme}>{theme}</Button>
          )}
        </ThemeContext.Consumer>
      </section>
      <form target="_blank" onSubmit = {handleSubmit(onSubmit)}  method = "POST" className = "designForm">
        <TextField
          {...register("nombreCompleto", {
            required: true,
            pattern: "a-zA-Z[ ]{2,}a-zA-Z",
          })}
          type="text"
          name="nombreCompleto"
          placeholder="Nombre completo"
        />
        {errors.nombreCompleto && errors.nombreCompleto.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.nombreCompleto && errors.nombreCompleto.type === "pattern" && (
          <span>This field need all the name of the person</span>
        )}
        <br />
        <TextField
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
          name="email"
        />
        {errors.email && errors.email.type === "required" && (
          <span>The field email is required</span>
        )}
        <br />
        <TextField
          {...register("telefono", { required: true })}
          type="text"
          placeholder="Telefono"
          name="telefono"
        />
        {errors.telefono && errors.telefono.type === "required" && (
          <span>The field telephone is required</span>
        )}
        <br />
        <TextField
          {...register("nPersonas", { required: true })}
          type="number"
          placeholder="Numero de personas"
          name="nPersonas"
        />
        {errors.nPersonas && errors.nPersonas.type === "required" && (
          <span>The field number persons is required</span>
        )}
        <br />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Basic example"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                {...register("fecha", { required: true })}
                name="fecha"
              />
            )}
          />
        </LocalizationProvider>
        {errors.fecha && errors.fecha.type === "required" && (
          <span>The field fecha is required</span>
        )}
        <br />
        <TextField
          {...register("hora", { min: 0, max: 23, required: true })}
          type="number"
          placeholder="Hora"
          name="hora"
        />
        {errors.hora && errors.hora.type === "required" && (
          <span>The field hora is required</span>
        )}
        {errors.hora && errors.hora.type === "min" && (
          <span>The hour must be equal or superior to 0</span>
        )}
        {errors.hora && errors.hora.type === "max" && (
          <span>The hour must be equal or inferior to 23</span>
        )}
        <br />
        <Button variant="contained" type="submit">Submit</Button>
      </form>
    </section>
  );
}
export default Reservas;
