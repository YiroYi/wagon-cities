import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

class City extends Component {

  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render() {
    return(
      <li className="list-group-item">
        <p onClick={this.handleClick}>{this.props.city.name}</p>
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch
  );
}

function mapReduxStateToProps(reduxState) {
  return {
    selectCity: reduxState.selectCity
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(City);
