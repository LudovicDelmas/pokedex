import React, {FunctionComponent  } from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



  
const App: FunctionComponent = () => {

 

 return (
    <Router>
       <div>
          <nav>
             <div className="nav-wrapper teal">
                <Link to="/" className="brand-logo center">Pokédex</Link>
             </div>
          </nav>
          <Switch>
             <Route exact path = "/" component = {PokemonList}/>
             <Route exact path = "/pokemons" component = {PokemonList} />
             <Route path = "/pokemons/:id" component = {PokemonDetail} />
          </Switch>
       </div>
    </Router>
 )
}



  
export default App;