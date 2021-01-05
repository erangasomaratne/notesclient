import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Notes from './components/notes';
import MovieReview from './components/movieReview';
import UpdateMovie from './components/updateMovie';
import Home from './components/home';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/notes" component={Notes}/>
        <Route path='/review' component={MovieReview} />
        <Route path='/updatemovie/:id' component={UpdateMovie}/>
        <Route path='/' exact component={Home} />
      </Switch>    
    </div>
  );
}

export default App;
