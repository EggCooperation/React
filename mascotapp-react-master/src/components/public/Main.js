import { Link } from "react-router-dom";
import RickAndMortyService from "../../services/RickAndMorty.service";
import React, { Component } from "react";
import {Cards} from "./Cards";

export default class Main extends Component {
  
  state = { mascotas: [] };

  componentDidMount() {
    RickAndMortyService.getAllCharacters()
      .then((data) => this.setState({ mascotas: data.results }))
      .catch(this.setState({ mascotas: [] }));
  }

  render() {
    return (
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Album example</h1>
              <p className="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
              <p>
                <Link to={"/mascota/form"} className="btn btn-primary my-2">
                  Carga una Mascota
                </Link>
              </p>
            </div>
          </div>
        </section>
        <Cards mascotas={this.state.mascotas} />
      </main>
    );
  }
}
