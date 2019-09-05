import React from 'react';
import { connect } from 'react-redux';

class About extends React.Component {

  render() {
    return (
      <div>
        Welcome to our app!<br />
        {this.props.apps ? `We have currently ${this.props.apps.length} apps. Please go to cards to see all info.` : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { apps } = state
  return {
    apps
  }
}

export default connect(mapStateToProps)(About);