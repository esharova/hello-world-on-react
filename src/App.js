import React, { Component } from 'react';
import { connect } from 'react-redux';

import Hero from './Hero';

class App extends Component {
  addLike(id) {
    console.log('Components addLike');
    this.props.onAddLike(id);
  }
  render() {
    var _this = this;
    return (
        <div>
          {this.props.stores.map(function (store, index) {
            store = {
                ...store,
                onAddLike: _this.addLike.bind(_this, index)
            }
            return <Hero key={index} item={store}/>
          })}
        </div>
    );
  }
}

export default connect(
    state => ({
      stores: state
    }),
    dispatch => ({
      onAddLike: (id) => {
        console.log('Dispatch onAddLike');
        dispatch({ type: 'ADD_LIKE', id: id });
      }
    })
)(App);


