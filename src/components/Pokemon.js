import React from 'react';
import './Pokemon.scss';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    return (
      <div className="pokemon_container">
        <img className="pokemon_element-photo" src={this.props.url} alt={this.props.name}/>
        <h2 className="pokemon_element-name">{this.props.name}</h2>
        <div className="pokemon_element-type">
            <ul className="pokemon_type-list">{this.props.types.map((type, index)=>
              <li className="pokemon_type-element" key={index}>{type}
              </li>)} 
            </ul> 
        </div>
      </div>
    );
  }
}
Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  types: PropTypes.array,
}

export default Pokemon;