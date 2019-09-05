import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchAppsIfNeeded } from '../redux/actions'
import { Switch, Route } from 'react-router-dom';

import Card from './Card'
import About from './About';
import Header from './Header';
import NotFound from './NotFound';

class App extends Component {
  
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAppsIfNeeded())
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/cards' render={() => <Card {...this.props}/>} />
          <Route component={NotFound}/>
       </Switch>
       </div>
    );
  }
}
 
export default connect()(App);
