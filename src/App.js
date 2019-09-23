import React from 'react';
import './App.scss';
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom';
import Detail from './components/Detail';

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
    return (
      <div className="App">
        <h1 className="title">Mi lista de pokemon
        </h1>
          <Switch>
            <Route exact path="/" render={()=>
             < Home 
                 filterName={this.filterName}
                 chosenName={this.state.chosenName}
                 pokemons={this.state.pokemons}
                           />
                     } />
            <Route path="/detail/:id" render={
              routerProps=>
              <Detail
                routerProps={routerProps}
                pokemons={this.state.pokemons}
              />
            }/>
          </Switch>
      </div>
    );
  }
}

export default App;
