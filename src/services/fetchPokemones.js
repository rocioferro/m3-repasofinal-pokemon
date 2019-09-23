const endpoint = 'https://raw.githubusercontent.com/Adalab/m3-evaluacion-intermedia-oneeyedman/componentbranch/pokemons.json'

const fetchPokemones = () => {
  fetch(endpoint)
  .then(res => res.json());
 };


export {fetchPokemones};


