import React, { Component } from 'react';
import { connect } from 'react-redux';

import Hero from './Hero';

class App extends Component {
  addLike(id) {
    console.log('addLike', id);
    this.props.onAddLike(id);
  }
  render() {
    var _this = this;
    return (
        <div>
          {this.props.stores.map(function (store) {
            return <Hero key={store.id} id={store.id} title={store.title} subtitle={store.subtitle} imgUrl={store.imageUrl} likes={store.likes} onAddLike={_this.addLike.bind(_this, store.id)}/>
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
        console.log('Dispatch onAddLike', id);
        dispatch({ type: 'ADD_LIKE', id: id });
      }
    })
)(App);


