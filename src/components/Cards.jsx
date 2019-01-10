import React, { Component } from "react";
import Card from "./Card";

class Cards extends Component {
  render() {
    const { cards } = this.props;
    return (
      <div className="cards">
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    );
  }
}

export default Cards;
