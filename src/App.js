import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';
import UserPage from './UserPage'
import Header from './Header'
import IdeaList from './IdeaList';
import CreateIdea from './CreateIdea'
import Idea from './Idea'

function App({ideas}) {
  return (
    <div>
      <Header />
      <Switch>
        <Route 
          path='/' 
          exact
          render={(props) => <UserPage {...props} ideas={ideas} /> }
        />
        <Route 
          path='/ideas' 
          render={(props) => <IdeaList {...props} ideas={ideas} /> }
        />
        <Route 
          path='/idea/:id' 
          render={(props) => <Idea {...props} ideas={ideas} /> }
        />
        <Route 
          path='/create-idea' 
          component={CreateIdea}
        />
        

        <Route />
      </Switch>
    </div>
  );
}

export default App;
