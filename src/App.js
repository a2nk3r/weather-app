import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards";

import clear from "./img/clear.png";
import rain from "./img/rain.png";
import cloudy from "./img/cloudy.png";
import snow from "./img/snow.png";
import fog from "./img/fog.png";

const API =
  "https://api.openweathermap.org/data/2.5/forecast?id=1254388&cnt=5&APPID=ca09bf0cf1756c6e4519217ae427cc7a";
class App extends Component {
  constructor(props) {
    super(props);
    const icons = [clear, rain, cloudy, snow, fog];
    this.state = {
      // initialized with randomly generated data
      cards: [
        {
          id: 0,
          date_txt: "01-01-2018 15:30".split(" ")[0],
          temp_max: randomNo(60, 80),
          temp_min: randomNo(40, 60),
          icon: icons[Math.round(Math.random() * icons.length)],
          description: null
        },
        {
          id: 1,
          date_txt: "02-01-2018 15:30".split(" ")[0],
          temp_max: randomNo(60, 80),
          temp_min: randomNo(40, 60),
          icon: icons[Math.round(Math.random() * icons.length)],
          description: null
        },
        {
          id: 2,
          date_txt: "03-01-2018 15:30".split(" ")[0],
          temp_max: randomNo(60, 80),
          temp_min: randomNo(40, 60),
          icon: icons[Math.round(Math.random() * icons.length)],
          description: null
        },
        {
          id: 3,
          date_txt: "04-01-2018 15:30".split(" ")[0],
          temp_max: randomNo(60, 80),
          temp_min: randomNo(40, 60),
          icon: icons[Math.round(Math.random() * icons.length)],
          description: null
        },
        {
          id: 4,
          date_txt: "05-01-2018 15:30".split(" ")[0],
          temp_max: randomNo(60, 80),
          temp_min: randomNo(40, 60),
          icon: icons[Math.round(Math.random() * icons.length)],
          description: null
        }
      ]
    };
  }
  updateFromAPI(result) {
    const cards = this.state.cards;
    for (let i = 0; i < 5; i++) {
      cards[i].date_txt = result.data.list[i].dt_txt.split(" ")[0];
      cards[i].temp_max =
        Math.round((result.data.list[i].main.temp_max - 273.15) * 10) / 10;
      cards[i].temp_min =
        Math.round((result.data.list[i].main.temp_min - 273.15) * 10) / 10;
      cards[i].icon = result.data.list[i].weather[0].main;
      cards[i].description = result.data.list[i].weather[0].description;
    }
    this.setState({ cards });
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(API)
      .then(result => this.updateFromAPI(result))
      .catch(error =>
        this.setState({
          error: error,
          isLoading: false
        })
      );
  }
  render() {
    return <Cards cards={this.state.cards} />;
  }
}

let randomNo = function(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

export default App;
