
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const CounterComponent = ({ counter, dispatch }) => (
  <div>
    <p>{counter}</p>
    <button
      onClick={() => dispatch({ type: 'ADD' })}
    >
      ADD
    </button>
    <button
      onClick={() => dispatch({ type: 'REMOVE' })}
    >
      REMOVE
    </button>
    <button
      onClick={() => dispatch({ type: 'ADD10' })}
    >
      ADD10
    </button>
    <button
      onClick={() => dispatch({ type: 'RMV10' })}
    >
      RMV10
    </button>
  </div>
);

export default connect(
  mapStateToProps
)(CounterComponent);