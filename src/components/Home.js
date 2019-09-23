import React from 'react';
import PokeList from './PokeList';
import Filter from './Filter';
import PropTypes from 'prop-types';


const Home = props => {
 const {chosenName, filterName, pokemons} = props
  return (
    <React.Fragment>
    < Filter
      chosenName={chosenName}
      filterName={filterName}
    />
    < PokeList 
      chosenName={chosenName}
      pokemons={pokemons}
      />
    </React.Fragment>
  )
}

Home.propTypes = {
  chosenName:PropTypes.string.isRequired, 
  filterName:PropTypes.func.isRequired,
  pokemons:PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default Home;