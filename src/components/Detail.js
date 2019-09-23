import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const  Detail = props => {
    const {routerProps, pokemons}= props;
    const Id =parseInt(routerProps.match.params.id);
    const pokemon = pokemons.filter(item=> item.id === Id)
    const {name, url, types} = pokemon[0]
    return (
      <div>
         <div className="card_img">
          <img className="pokemon_element-photo" src={url} alt={name}/>
        </div>
        <h2 className="pokemon_element-name">{name}</h2>
        <div className="pokemon_element-type">
            <ul className="pokemon_type-list">{types.map((type, index)=>
              <li className="pokemon_type-element" key={index}>{type}
              </li>)} 
            </ul> 
        </div>

        <Link to="/">Volver
        </Link>
      </div>
    );

  }

  Detail.propTypes = {
    routerProps:PropTypes.object.isRequired,
    pokemons:PropTypes.arrayOf(PropTypes.object).isRequired,
  }

export default Detail; 