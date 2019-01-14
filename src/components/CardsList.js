import React, { Component } from 'react';
import Card from './Card';



class CardList extends Component {
    render() {

        const pokemonList = this.props.pokemon;

        return (

            <React.Fragment>
                <h1 className="cards__list--name">Mi lista de Pokemon</h1>
                <ul className="cards__list">

                    {pokemonList.map(pokemon => {
                        return (
                            <li className="cards__list--element">
                                <Card 
                                    urlImage={pokemon.url}
                                    name={pokemon.name}
                                    types={pokemon.types}

                                />
                            </li>

                        );

                    })}

                </ul>
            </React.Fragment>

        );
    }
}

export default CardList;
