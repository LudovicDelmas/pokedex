import React, {FunctionComponent  } from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';


  
const App: FunctionComponent = () => {

 

 return (
    <Router>
       <div>
          {/* La barre de navigation commune à toutes les pages */}
          <nav>
             <div className="nav-wrapper teal">
                <Link to="/pokedex" className="brand-logo center">Pokédex</Link>
             </div>
          </nav>
            {/* Le systeème de gestion des routes de l'app */}
          <Switch>
             <Route exact path = "/pokedex" component = {PokemonList}/>
             <Route exact path = "/pokemons" component = {PokemonList} />
             <Route exact path = "/pokemons/edit/:id" component = {PokemonEdit} />
             <Route path = "/pokemons/:id" component = {PokemonDetail} />
             <Route component = {PageNotFound} />
          </Switch>
       </div>
    </Router>
 )
}



  
export default App;