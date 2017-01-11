import React, { Component } from 'react';

class LikeCounter extends Component {
  render() {
    return (
        <div className="row">
          <button className="btn btn-primary col-xs-6" onClick={this.props.onCount}>Like</button>
          <div className="col-xs-6 text-center">
            {this.props.count}
          </div>
        </div>
    );
  }
};

export default LikeCounter;