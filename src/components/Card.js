import React, { Component } from 'react';


class Card extends Component {
  render() {
    return (
      <section className="card">
        <div className={`card__item card__item--${this.props.name}`}>
          <img className="card__image" src={this.props.urlImage} alt={`Imagen de ${this.props.name}`} />

          <h2 className="card__name">{this.props.name}</h2>

          <ul className="card__types">

            {this.props.types.map((type, index) => {
              return (
                <li className={`card__type--element card__type--element${index}`}>
                  {type}
                </li>
              );

            })}

          </ul>

        </div>


      </section>

    );
  }
}

export default Card;
