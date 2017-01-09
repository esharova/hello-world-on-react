import React, { Component } from 'react';
// import './App.css';

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

const Hero = React.createClass({
  getInitialState: function () {
    return {
      count: 0
    }
  },

  handleClick: function () {
    this.setState({
      count: this.state.count + 1
    });
  },

  render: function () {
    return (
        <div className="col-xs-6 col-md-3">
          <div className="thumbnail">
            <img src={this.props.imgUrl} alt={this.props.title}/>
            <div className="caption">
              <h3>{this.props.title}</h3>
              <p>{this.props.subtitle}</p>
              <LikeCounter count={this.state.count} onCount={this.handleClick}/>
            </div>
          </div>
        </div>
    );
  }
});

class App extends Component {
  render(props) {
    return (
      <div className="row">
        {this.props.heroes.map(function (hero) {
          return <Hero key={hero.id} title={hero.title} subtitle={hero.subtitle} imgUrl={hero.imageUrl}/>
        })}
      </div>
    );
  }
}

export default App;
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }


