import React from 'react';
import Pokemon from './Pokemon';
import './PokeList.scss'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class PokeList extends React.Component {
  render() {
    return(
      <React.Fragment>
      <ol className="pokemon_list">{this.props.pokemons
        .filter(pokemon=> pokemon.name.toUpperCase().includes(this.props.chosenName.toUpperCase()))
        .map(pokemon=>
        <li className="pokemon_elements" key={pokemon.id}>
          <Link to={`/detail/${pokemon.id}`}>
            <Pokemon
              name={pokemon.name}
              url={pokemon.url}
              types={pokemon.types}
              />
           </Link> 
        </li>
        )}
      </ol>
      </React.Fragment>


    );
  }
}

PokeList.propTypes = {
  pokemons: PropTypes.array,
}


export default PokeList;