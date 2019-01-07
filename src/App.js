import React, { Component } from "react";
import sunny from "./img/sunny.png";
import rain from "./img/rain.png";
import cloudy from "./img/cloudy.png";
import snow from "./img/snow.png";
import fog from "./img/fog.png";
import "./App.css";
import Cards from "./components/Cards";

class App extends Component {
  constructor(props) {
    super(props);
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    this.state = {
      cards: [
        {
          id: 0,
          day: days[0],
          category: cloudy,
          status: "cloudy",
          low: randomNo(40, 60),
          high: randomNo(60, 80)
        },
        {
          id: 1,
          day: days[1],
          category: sunny,
          status: "sunny",
          low: randomNo(40, 60),
          high: randomNo(60, 80)
        },
        {
          id: 2,
          day: days[2],
          category: rain,
          status: "rain",
          low: randomNo(40, 60),
          high: randomNo(60, 80)
        },
        {
          id: 3,
          day: days[3],
          category: snow,
          status: "snow",
          low: randomNo(40, 60),
          high: randomNo(60, 80)
        },
        {
          id: 4,
          day: days[4],
          category: fog,
          status: "fog",
          low: randomNo(40, 60),
          high: randomNo(60, 80)
        }
      ]
    };
  }

  render() {
    return <Cards cards={this.state.cards} />;
  }
}

let randomNo = function(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

export default App;
