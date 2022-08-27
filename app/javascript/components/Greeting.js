import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './Greeting.css';

const GET_GREETING_REQUEST = 'GET_GREETING_REQUEST';
const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';

function getGreeting() {
  return (dispatch) => {
    dispatch({ type: GET_GREETING_REQUEST });
    return fetch('v1/greetings.json')
      .then(response => response.json())
      .then(json => dispatch(retrievedGreeting(json)))
      .catch(error => console.log(error));
  };
}

export function retrievedGreeting(json) {
  return {
    type: GET_GREETING_SUCCESS,
    payload: json,
  };
}

class Greeting extends React.Component {
  render() {
    return (
      <div className='advice'>
        <h2>{this.props.greeting}</h2>
        <button onClick={() => this.props.getGreeting()}>Get Advice</button>
      </div>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greeting: (state) => state.greeting,
});

const mapDispatchToProps = { getGreeting };

Greeting.propTypes = {
  greeting: PropTypes.string,
};

export default connect(structuredSelector, mapDispatchToProps)(Greeting);
