import React, { Component} from 'react';
import LikeCounter from './LikeCounter';

class Hero extends Component {

  render() {
    const { item } = this.props;
    return (
        <div className="col-xs-6 col-md-3">
          <div className="thumbnail">
            <img src={ item.imageUrl } alt={ item.title }/>
            <div className="caption">
              <h3>{ item.title }</h3>
              <p>{ item.subtitle }</p>
              <LikeCounter onAddLike={ () => { this.props.onAddLike(item) } }>
                  { item.likes }
              </LikeCounter>
            </div>
          </div>
        </div>
    );
  }
};

export default Hero;