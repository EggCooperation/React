import React, { useState, useEffect } from "react";
import UserService from "../../../services/User.service";

export const UserTable = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.getAllUsers()
      .then((response) => setUsers(response.data.users))
      .catch(() => setUsers([]))
  }, [])

  const rows = users.map((m, i) => (
    <tr key={i}>
      <td>{m.dni}</td>
      <td>{m.name}</td>
      <td>{m.lastName}</td>
      <td>{m.email}</td>
      <td>{m.id}</td>
    </tr>
  ));

  return (
    <div>
      <h2 className="mt-4">Tabla Usuarios</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">DNI</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Email</th>
              <th scope="col">Foto</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  )
}

