import React from 'react';
import { Link } from "react-router-dom";

export const Card = ({mascota}) => {

    return (
        <div className="col">
        <div className="card shadow-sm">
          <img height="100%" src={mascota.image} alt="perro-giratorio" />

          <div className="card-body">
            <strong className="d-inline-block mb-2 text-success">
              {mascota.species}
            </strong>
            <h3 className="mb-0 text-dark">{mascota.name}</h3>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  <Link to={`/mascota/detalle/${mascota.id}`} className="nav-link">
                    Detalle
                  </Link>
                </button>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    )
}
