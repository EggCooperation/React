import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development';
import RickAndMortyService from '../../services/RickAndMorty.service';

export const Detail = () => {

  const [personaje, setpersonaje] = useState({});

  const {id} = useParams(); 


  useEffect(() => {
    RickAndMortyService.getCharacterById(id)
    .then((data) => setpersonaje(data))
  },[id])

  console.log(personaje);


  
 const detailCard = {
  width: '80%',
  margin: 'auto',
  background: 'white'
 }

  return (
    <div className="card mb-3" style={{'background': 'gainsboro'}}>
    <div className="row g-0 mt-4 mb-4" style={detailCard}>
      <div className="col-md-3">
        <img src={personaje.image} className="img-fluid rounded-start imgDetalle" alt="img del personaje"/>
      </div>
      <div className="col-md-8 detallePersonaje">
        <div className="card-body">
          <h5 className="card-title">{personaje.name}</h5>
          <p className="card-text"><small className=""> Specie: {personaje.species}</small></p>
          <p className="card-text"><small className=""> Status: {personaje.status}</small></p>
          <p className="card-text"><small className=""> Gender: {personaje.gender}</small></p>
          <p className="card-text"><small className=""> Created: {personaje.created}</small></p>
        </div>
        <div className="btn-group" style={{'marginLeft': '15px'}}>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <Link to={'/'} className="nav-link px-2 text-success">Inicio</Link>
              </button>
            </div>
      </div>
    </div>
  </div>
  )
}
