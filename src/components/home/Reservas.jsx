import Header from "./Header";
import { ThemeContext } from "../..";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
function Reservas() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  /*  React.useEffect(() => {
    setError("hora", {
      types: {
        min: "the value is inferior to 0",
        max: "the value is superior to 23",
      },
    });
  }, [setError]); */
  const [value, setValue] = useState(null);
  return (
    <section id="Reservation">
      <header className="App-header">
        <Header />
      </header>
      <section id="Contact">
        <ThemeContext.Consumer>
          {({ theme, changeTheme }) => (
            <Button onClick={changeTheme}>{theme}</Button>
          )}
        </ThemeContext.Consumer>
      </section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("nombreCompleto", {
            required: true,
            pattern: "a-zA-Z[ ]{2,}a-zA-Z",
          })}
          type="text"
          placeholder="Nombre completo"
        />
        {errors.nombreCompleto && errors.nombreCompleto.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.nombreCompleto && errors.nombreCompleto.type === "pattern" && (
          <span>This field need all the name of the person</span>
        )}
        <br />
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
        />
        {errors.email && errors.email.type === "required" && (
          <span>The field email is required</span>
        )}
        <br />
        <input
          {...register("telefono", { required: true })}
          type="text"
          placeholder="Telefono"
        />
        {errors.telefono && errors.telefono.type === "required" && (
          <span>The field telephone is required</span>
        )}
        <br />
        <input
          {...register("nPersonas", { required: true })}
          type="number"
          placeholder="Numero de personas"
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
              />
            )}
          />
        </LocalizationProvider>
        {errors.fecha && errors.fecha.type === "required" && (
          <span>The field fecha is required</span>
        )}
        <br />
        <input
          {...register("hora", { min: 0, max: 23, required: true })}
          type="number"
          placeholder="Hora"
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
        <input type="submit" />
      </form>
    </section>
  );
}
export default Reservas;
