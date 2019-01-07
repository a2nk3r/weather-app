import React, { Component } from "react";

class Card extends Component {
  styles = {
    width: 110
  };

  render() {
    const { date_txt, temp_max, temp_min, description, icon } = this.props.card;
    return (
      <div
        style={this.styles}
        className="weather-card m-2 border border-success"
        align="center"
      >
        <span className="badge m-2 badge-primary">{date_txt}</span>
        <div className="category" align="center">
          <img src={icon} alt={description} title={description} />
        </div>
        <div className="temperatures">
          <span className="badge m-2 badge-light">{temp_max}°C</span>
          <span className="badge m-2 badge-dark">{temp_min}°C</span>
        </div>
      </div>
    );
  }
}

export default Card;
