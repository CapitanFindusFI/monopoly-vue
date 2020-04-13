import Die from '../models/Die';

class DieController {
  static generateDice() {
    return [
      new Die(),
      new Die(),
    ];
  }

  constructor() {
    this.dice = DieController.generateDice();
  }

  getDiceValue() {
    return this.dice.reduce((value, die) => {
      return (value + die.getValue());
    }, 0);
  }

  roll() {
    this.dice.forEach((die) => {
      const value = Math.floor(Math.random() * 6) + 1;
      die.setValue(value);
    });
  }
}

export default DieController;
