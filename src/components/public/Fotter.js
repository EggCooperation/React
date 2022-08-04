import React, { useState } from 'react'

export const Fotter = () => {

  const [click, setClick] = useState(0);

  const sumarClicks = () => {
    setClick(click + 1)
  }
  const restarClicks = () => {
    setClick(click - 1)
  }

  const year = new Date().getFullYear();
  const company = "EGG Education";


  return (
    <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-muted">&copy; {year} {company} → {click}</p>

            <button className="btn btn-sm btn-outline-success" onClick={sumarClicks}>Sumar clicks</button>
            <button className="btn btn-sm btn-outline-danger" onClick={restarClicks}>Restar clicks</button>

            <ul className="nav col-md-4 justify-content-end">   
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li> 
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
            </ul>
        </footer>
    </div>
  )
}
