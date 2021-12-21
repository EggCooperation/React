import React, { useEffect, useState } from "react";
import AuthService from "../../services/auth.service";
import MascotaService from "../../services/mascota.service";

export const ListaMascotas = () => {

  const [mascotas, setMascotas] = useState()
  const user = AuthService.getUser();

  const handleFav = (petId) => {
    console.log(petId)
  }

  const handleDelete = (petId) => {
    console.log(petId)
  }

  useEffect(() => {
    // MascotaService.getPetsByUser(user.id).then(({ data }) => setMascotas(data.pets))
    MascotaService.getAllPets().then(({ data }) => setMascotas(data.pets))
  }, [])

  return (
    <div>
      <h2 className="mt-4">Mis Mascotas</h2>
      <div className="table-responsive">
        {
          mascotas ?
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Fav</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {
                  //Lista
                  mascotas.map(m => (
                    <tr className="table-success" key={m.id}>
                      <td>{m.nickname}</td>
                      {/* <td><img src={m.profilePicture.uri} alt={navigator.nickname} /></td> */}
                      <td><img src="https://c.tenor.com/xhj_nO3GCQ0AAAAd/so-pretty-dog.gif" width="60" height="60" alt={navigator.nickname} /></td>
                      <td>
                        <i className="far fa-thumbs-up" onClick={() => handleFav(m.id)} />
                      </td>
                      <td>
                        <i className="fas fa-trash" onClick={() => handleDelete(m.id)} />
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            :
            <p>Cargando datos...</p>
        }
      </div>
    </div>
  )
}