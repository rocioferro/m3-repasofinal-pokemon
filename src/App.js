import React from 'react';
import './App.scss';
import PokeList from './components/PokeList'

 const endpoint = 'https://raw.githubusercontent.com/Adalab/m3-evaluacion-intermedia-oneeyedman/componentbranch/pokemons.json'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      pokemons:[],
      chosenName: '',
    }
    this.filterName=this.filterName.bind(this);
  }
  componentDidMount(){
    this.getPokemon()
    
  }

 getPokemon() {
  fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemons:data
      })
    });
    
}

filterName(event){
  const value = event.currentTarget.value
  this.setState ({
    chosenName: value,
  })
}
  
  render() {
    console.log(this.state.pokemons);
    return (
      <div className="App">
        <h1 className="title">Mi lista de pokemon
        </h1>
          <input type="text" value={this.state.chosenName} onChange={this.filterName}></input>
          <PokeList 
            pokemons={this.state.pokemons}
            chosenName={this.state.chosenName}
          />
      </div>
    );
  }
}

export default App;
