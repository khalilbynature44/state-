import React, { Component } from 'react'

import image from "./lilo.jpg";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "khalil baklouti ",
      profession: "developer and fitness coach",
      bio: " ",
      imgSrc: <img src={image} alt="" style={{ width: 250, height: 250 }} />,
      shows: false,
      count: 0,
    };
  }
  handleShow = () => {
    this.setState({ shows: !this.state.shows });
  };
  componentDidMount() {
    return setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 500);
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>Profile:</h1>
        </div>
        <div className="Main">
          {this.state.shows ? (
            <div className="Elements">
              <h2>{this.state.fullName}</h2>
              <h3>{this.state.profession}</h3>
              <div> {this.state.imgSrc}</div>
              <h3> bio: {this.state.bio}</h3>
              <input type="text" value={this.state.count} />
            </div>
          ) : null}{" "}
          <br />
          <button className="button" onClick={this.handleShow}>
            show me
          </button>
        </div>
      </div>
    );
  }
}