import React, { Component} from 'react';
import LikeCounter from './LikeCounter';

class Hero extends Component {
  render() {
    const _item = this.props.item;
    return (
        <div className="col-xs-6 col-md-3">
          <div className="thumbnail">
            <img src={_item.imageUrl} alt={_item.title}/>
            <div className="caption">
              <h3>{_item.title}</h3>
              <p>{_item.subtitle}</p>
              <LikeCounter count={_item.likes} onCount={_item.onAddLike}/>
            </div>
          </div>
        </div>
    );
  }
};

export default Hero;