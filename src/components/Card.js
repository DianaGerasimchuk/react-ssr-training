import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import CardLeft from './Card-left';
import CardRight from './Card-right';

class Card extends Component {

  Cardbaker(props){

    let cards = [], cardNumber = 1

    for(let app of props.apps){
      cards.push(
           <div className="app-card" key={app.name}>
                <CardLeft img={app.img} appno={cardNumber} totalapps={props.totalapps} />
                <CardRight name={app.name} app={app}/>
           </div>
         )
      cardNumber++
    }

    return ( <div> {cards} </div> )

  }

  render() {
    const { isFetching, apps } = this.props
    let totalapps = apps.length;

    return (
      <Fragment>
        {isFetching && apps.length === 0 && <h2>Loading...</h2>}
        {!isFetching && apps.length === 0 && <h2>Empty.</h2> }
        <this.Cardbaker apps={this.props.apps} totalapps={this.props.totalapps}/>
      </Fragment>
    );
  }

}

function mapStateToProps(state) {
  const { isFetching, apps } = state
  return {
    isFetching,
    apps
  }
}
 
export default connect(mapStateToProps)(Card);
