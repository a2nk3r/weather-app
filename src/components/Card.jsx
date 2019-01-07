import React, { Component } from "react";
class Card extends Component {
  styles = {
    width: 100
  };

  render() {
    const { day, category, high, low, status } = this.props.card;
    return (
      <div
        style={this.styles}
        className="weather-card m-2 border border-success"
      >
        <span className="badge m-2 badge-primary">{day}</span>
        <div className="category">
          <img src={category} alt={status} title={status} />
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
