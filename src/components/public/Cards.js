import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import RickAndMortyService from '../../services/RickAndMorty.service'
import { Card } from './Card'

export const Cards = () => { 
 
  const [personajes, setpersonajes] = useState([])

  useEffect(() => { //se encarga de una escucha activa de lo que pasa o cambia en mi componente para hacer lo que tenga q hacer
    RickAndMortyService.getAllCharacters()
    .then((data) => setpersonajes(data.results))
    .catch((error) => console.log(error))

  }, []) //esta es la variable a escuchar constantemente para ver si cambia

  console.log(personajes) //en console log lo manda vacio primero, respeta el ciclo de vida de los componentees en compoDidM
 
  //en base a la variable card list genera y devuelve cartas con esos elementos
  const cardList = personajes.map( (p)=> <Card personaje={p} key={p.id} />)

  return (
    <div className="album py-5 bg-light">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {cardList}
      </div>
    </div>
  </div>
  )
}
