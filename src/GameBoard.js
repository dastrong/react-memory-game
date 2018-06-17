import React, { Component } from 'react';
import Card from './Card'

const NUM_CARDS = 16;

class GameBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards: Array(NUM_CARDS).fill(null)
    };
    // this.getRandomNumber = this.getRandomNumber.bind(this);
    // this.getRandomColor = this.getRandomColor.bind(this);
  }

  // getRandomNumber(){
  //   return Math.floor(Math.random()*255);
  // }

  // getRandomColor(){
  //   return `rgb(${this.getRandomNumber()}, ${this.getRandomNumber()}, ${this.getRandomNumber()})`;
  // }

  render() {
    const style = {display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}
    // console.log(this.getRandomColor())
    const cards = this.state.cards.map((card, i) => (
      <Card key={i} color={this.getRandomColor()} />
    ));
    
    return (
      <div style={style}>
        {cards}
      </div>
    )
  }
}

export default GameBoard;