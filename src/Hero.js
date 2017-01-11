import React, { Component} from 'react';
import LikeCounter from './LikeCounter';

class Hero extends Component {
  render() {
    console.log(this.props);
    return (
        <div className="col-xs-6 col-md-3">
          <div className="thumbnail">
            <img src={this.props.imgUrl} alt={this.props.title}/>
            <div className="caption">
              <h3>{this.props.title}</h3>
              <p>{this.props.subtitle}</p>
              <LikeCounter count={this.props.likes} onCount={this.props.onAddLike}/>
            </div>
          </div>
        </div>
    );
  }
};

export default Hero;