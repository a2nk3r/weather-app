import React, { Component } from "react";
import Card from "./Card";
import weatherData from "../weather.json";
class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: weatherData.latitude,
      longitude: weatherData.longitude
    };
  }
  render() {
    const { cards, onShowHide } = this.props;
    const { latitude, longitude } = this.state;
    return (
      <div>
        <span className="badge m-4 badge-danger">Longitude: {longitude}</span>
        <span className="badge m-4 badge-success">Latitude: {latitude}</span>
        <div className="cards">
          {cards.map(card => (
            <Card key={card.id} card={card} onShowHide={onShowHide} />
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
