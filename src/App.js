import React, { Component } from "react";
import "./App.css";
import Cards from "./components/Cards";

import weatherData from "./weather.json";
import initialData from "./default.json";

// for fetching data from openWeatherMap API
// const API =
//   "https://api.openweathermap.org/data/2.5/forecast?id=1254388&cnt=5&APPID=ca09bf0cf1756c6e4519217ae427cc7a";

// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
// const API = `https://api.darksky.net/forecast/${API_KEY}/10.7905,78.7047`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData
    };
  }
  handleShowHide = id => {
    const cards = this.state.initialData.cards;
    cards[id].showSummary = !cards[id].showSummary;
    this.setState({ cards });
  };
  updateFromLocal() {
    const cards = this.state.initialData.cards;
    for (let i = 0; i < cards.length; i++) {
      const {
        time,
        temperatureHigh,
        temperatureLow,
        icon,
        summary
      } = weatherData.daily.data[i];
      let dateTime = convertDate(time).split(" ");
      // Jan 10 2019 12:00:00 AM GMT+5:30
      cards[i].datetime.date = dateTime[1];
      cards[i].datetime.month = dateTime[0];
      cards[i].datetime.time = dateTime[3].substr(0, 5) + " " + dateTime[4];
      cards[i].temperatureHigh = temperatureHigh;
      cards[i].temperatureLow = temperatureLow;
      cards[i].icon = icon;

      cards[i].summary = summary;
    }
    this.setState({ cards });
  }
  updateFromAPI(result) {
    const cards = this.state.cards;

    for (let i = 0; i < 5; i++) {
      const {
        time,
        temperatureHigh,
        temperatureLow,
        icon,
        summary
      } = result.daily.data[i];
      cards[i].time = Date(time);
      cards[i].temperatureHigh = temperatureHigh;
      cards[i].temperatureLow = temperatureLow;
      cards[i].icon = icon;
      cards[i].summary = summary;
    }
    this.setState({ cards });
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    this.updateFromLocal();
  }
  render() {
    return (
      <div className="container-fluid">
        <Cards
          cards={this.state.initialData.cards}
          onShowHide={this.handleShowHide}
        />
      </div>
    );
  }
}

function convertDate(time) {
  // Jan 10 2019 12:00:00 AM GMT+5:30

  var dateTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short"
  }).format(time * 1000);
  dateTime = dateTime.replace(/,/g, ""); // replaces all commas with nothing
  return dateTime;
}
export default App;
