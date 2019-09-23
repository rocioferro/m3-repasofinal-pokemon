import React from 'react';
import propTypes from 'prop-types';

const Filter = props => {
  const {chosenName, filterName} = props;
return (
  <input type="text" value={chosenName} onChange={filterName}></input>
); }

Filter.propTypes = {
  chosenName:propTypes.string.isRequired,
  filterName:propTypes.func.isRequired,
}


export default Filter;
