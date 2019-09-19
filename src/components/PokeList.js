import React from 'react';
import Pokemon from './Pokemon';
import './PokeList.scss'
import PropTypes from 'prop-types';

class PokeList extends React.Component {
  render() {

    return(
      
      <ol className="pokemon_list">{this.props.pokemons
        .filter(pokemon=> pokemon.name.includes(this.props.chosenName))
        .map(pokemon=>
        <li className="pokemon_elements" key={pokemon.id}>
          <Pokemon
            name={pokemon.name}
            url={pokemon.url}
            types={pokemon.types}
            />
        </li>
        )}
      </ol>


    );
  }
}

PokeList.propTypes = {
  pokemons: PropTypes.array,
}


export default PokeList;