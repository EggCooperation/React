import { useState } from "react";

export const useUserForm = ( initialState = {} ) => {
  //es un hook que nos va a permitir manejar un formulario

  const [form, setform] = useState(initialState);

  const handleChanges = ({ target }) => {
    //esta funcion se va a encargar de escuchar cambios en un input y va a tomar el target
    const { name, value } = target; //target va a hacer referencia al input que llama a handleChanges

    // console.log("target: ", target);  //1- cuando llame a handleChange cada input va a mostrar quien lo llamo
    // console.log("name: ", name); // 2- el name que tiene
    // console.log("value: ", value); // 3- y el value que tiene 
    setform({
      ...form, //esto hace que si el form ya tenia valor tmb los incluya y agregue los nuevos
      [name]: value,
    });
  };
  return {
    form,
    setform,
    handleChanges,
  };
};
