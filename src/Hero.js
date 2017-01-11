import React, { Component} from 'react';
import LikeCounter from './LikeCounter';

class Hero extends Component {
  render() {
    return (
        <div className="col-xs-6 col-md-3">
          <div className="thumbnail">
            <img src={this.props.item.imageUrl} alt={this.props.item.title}/>
            <div className="caption">
              <h3>{this.props.item.title}</h3>
              <p>{this.props.item.subtitle}</p>
              <LikeCounter count={this.props.item.likes} onCount={this.props.item.onAddLike}/>
            </div>
          </div>
        </div>
    );
  }
};

export default Hero;