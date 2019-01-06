import React, { Component } from "react";
import sunny from "./img/sunny.png";
import rain from "./img/rain.png";
import cloudy from "./img/cloudy.png";
import snow from "./img/snow.png";
import "./App.css";
import Card from "./components/Card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {
        day: "Mon",
        category: cloudy, // sunny/rainy/cloudy/snowy
        high: 78,
        low: 67
      }
    };
  }
  render() {
    return (
      <div>
        <Card card={this.state.card} />
      </div>
    );
  }
}

export default App;
