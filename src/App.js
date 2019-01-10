import React, { Component } from "react";

import "./App.css";
import Cards from "./components/Cards";
import uuid from "uuid/v1";
import clear from "./img/clear.png";
import rain from "./img/rain.png";
import cloudy from "./img/cloudy.png";
import snow from "./img/snow.png";
import fog from "./img/fog.png";

import weatherData from "./weather.json";

// for fetching data from openWeatherMap API
// const API =
//   "https://api.openweathermap.org/data/2.5/forecast?id=1254388&cnt=5&APPID=ca09bf0cf1756c6e4519217ae427cc7a";

class App extends Component {
  card = {
    id: 0,
    date_txt: null,
    time_txt: null,
    temp_max: null,
    temp_min: null,
    icon: null,
    description: null
  };
  constructor(props) {
    super(props);

    this.state = {
      // initialized with randomly generated data

      cards: [
        {
          id: uuid(),
          date_txt: null,
          time_txt: null,
          temp_max: null,
          temp_min: null,
          icon: null,
          description: null
        },
        {
          id: uuid(),
          date_txt: null,
          time_txt: null,
          temp_max: null,
          temp_min: null,
          icon: null,
          description: null
        },
        {
          id: uuid(),
          date_txt: null,
          time_txt: null,
          temp_max: null,
          temp_min: null,
          icon: null,
          description: null
        },
        {
          id: uuid(),
          date_txt: null,
          time_txt: null,
          temp_max: null,
          temp_min: null,
          icon: null,
          description: null
        },
        {
          id: uuid(),
          date_txt: null,
          time_txt: null,
          temp_max: null,
          temp_min: null,
          icon: null,
          description: null
        }
      ]
    };
  }
  updateFromLocal() {
    const icons = [clear, rain, cloudy, snow, fog];
    const randomArray = Array.from({ length: 5 }, () =>
      Math.round(Math.random() * 5)
    );
    const cards = this.state.cards;
    for (let i = 0; i < cards.length; i++) {
      cards[i].date_txt = weatherData.list[i].dt_txt.split(" ")[0];
      cards[i].time_txt = weatherData.list[i].dt_txt.split(" ")[1].substr(0, 5);
      cards[i].temp_max =
        Math.round((weatherData.list[i].main.temp_max - 273.15) * 10) / 10;
      cards[i].temp_min =
        Math.round((weatherData.list[i].main.temp_min - 273.15) * 10) / 10;
      cards[i].icon = icons[randomArray[i]];
      cards[i].description = weatherData.list[i].weather[0].description;
    }
    this.setState({ cards });
  }
  updateFromAPI(result) {
    const cards = this.state.cards;
    for (let i = 0; i < 5; i++) {
      cards[i].date_txt = result.data.list[i].dt_txt.split(" ")[0];
      cards[i].time_txt = result.data.list[i].dt_txt.split(" ")[1].substr(0, 5);
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
    // axios
    //   .get(API)
    //   .then(result => this.updateFromAPI(result))
    //   .catch(error =>
    //     this.setState({
    //       error: error,
    //       isLoading: false
    //     })
    //   );
    this.updateFromLocal();
  }
  render() {
    return <Cards cards={this.state.cards} />;
  }
}
export default App;
