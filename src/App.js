import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Hero from './Hero';

import { onAddLike } from './actions';

class App extends Component {

  handleAddLike(store) {
    console.log('Components addLike');
    this.props.onAddLike && this.props.onAddLike(store);
  }

  render() {
    return (
        <div>
          {this.props.stores.map((store) => {
            return <Hero
                key={ store.id }
                item={ store }
                onAddLike={ this.handleAddLike.bind(this) } />
          })}
        </div>
    );
  }
}

const getActions = (dispatch) =>
    bindActionCreators({
        onAddLike
    }, dispatch);

export default connect(
    state => ({
      stores: state
    }),
    getActions
)(App);


