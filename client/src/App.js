import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Home from './components/pages/Home'
import Main from './components/pages/Main'


function App() {
  return (
 <BrowserRouter>
<Switch>
  <Route exact path='/' component={Home}/>
  <Route path='/main' component={Main}/>
</Switch>
<Footer/>
 </BrowserRouter>
  )
}

export default App;
