import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { clearApps } from '../redux/actions';

class Header extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to='/'>About</NavLink>
          </li>
          <li>
            <NavLink to='/cards'>Cards</NavLink>
          </li>
          <li>
            <button type='button' onClick={(e) => { e.preventDefault(); this.props.clearApps(); }}>Clear</button>
          </li>
        </ul>
      </div>
    )
  } 
}


const mapPropsToAction = dispatch => ({
  clearApps: () => { dispatch(clearApps()) }
});

export default connect(null, mapPropsToAction)(Header); 