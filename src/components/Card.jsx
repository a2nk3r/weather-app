import React, { Component } from "react";
class Card extends Component {
  render() {
    const { day, category, high, low } = this.props.card;
    return (
      <div className="weather-card m-3">
        <span className="badge m-2 badge-primary">{day}</span>
        <div className="category">
          <img src={category} />
        </div>
        <div className="temperatures">
          <span className="badge m-2 badge-light">{high}°</span>
          <span className="badge m-2 badge-dark">{low}°</span>
        </div>
      </div>
    );
  }
}

export default Card;
