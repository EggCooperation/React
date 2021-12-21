import React from "react";
import { Card } from "../secured/pets/Card";

export const Cards = (props) => {
  const listItems = props.mascotas.map((m) => <Card mascota={m} key={m.id} />);

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {listItems}
        </div>
      </div>
    </div>
  );
};
