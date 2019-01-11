import React, { Component } from "react";

import hot from "../img/hot.png";

class Card extends Component {
  styles = {
    width: 140,
    backgroundColor: "#C0C0C0"
  };

  render() {
    const {
      id,
      datetime,
      temperatureHigh,
      temperatureLow,
      summary,
      showSummary
    } = this.props.card;

    return (
      <div className="weather-card border">
        <div
          style={this.styles}
          className="border border-success"
          align="center"
        >
          <span className="badge m-2 badge-info">
            <h3>{datetime.date}</h3> {datetime.month}
          </span>
          <span className="badge m-2 badge-warning">{datetime.time}</span>
          <div className="category" align="center">
            <img src={hot} alt={summary} title={summary} />
          </div>
          <div className="temperatures">
            <span className="badge m-2 badge-light">{temperatureHigh}°C</span>
            <span className="badge m-2 badge-dark">{temperatureLow}°C</span>
          </div>
        </div>
        <p className="m-2">
          <strong>{showSummary ? summary : ""}</strong>
        </p>
        <div align="center" className="m-2">
          <hr />
          <button
            type="button"
            className="btn btn-link"
            onClick={() => this.props.onShowHide(id)}
          >
            <h6>{showSummary ? "Hide" : "summary"}</h6>
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
