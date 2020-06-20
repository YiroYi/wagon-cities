import React, { Component } from 'react';
import { connect } from "react-redux";

const city = { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' }
class ActiveCity extends Component {

  render(props){
    let style = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectCity.slug}`;
    return(
      <div className="active-city">
        <p>{this.props.selectCity.name}</p>
        <p>{this.props.selectCity.address}</p>
        <img src={style} alt=""/>
      </div>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    selectCity: reduxState.selectCity
  };
}

export default connect(mapReduxStateToProps)(ActiveCity);
