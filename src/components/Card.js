import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
  render() {
    return (
      // <section className="card">
        <div className={`card__item card__item--${this.props.name}`}>
          <div className="card__image--container">
          <img className="card__image" src={this.props.urlImage} alt={`Imagen de ${this.props.name}`} />
          </div>
          
          
          <div className="card__name--container">
            <h2 className="card__name">{this.props.name}</h2>
          </div>
      
          <ul className="card__types">

            {this.props.types.map((type, index) => {
              return (
                <li className={`card__type--element card__type--element${index}`}>
                  <div className="type">
                    <p className="type__name">
                      {type}
                    </p>
                  
                  </div>
                  
                </li>
              );

            })}

          </ul>

        </div>


      // </section>

    );
  }
}

export default Card;
