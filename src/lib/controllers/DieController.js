import Die from '../models/Die';

class DieController {
  static generateDice() {
    return [
      new Die(),
      new Die(),
    ];
  }

  roll(dice) {
    const value = Math.floor(Math.random() * (Math.floor(6) - Math.ceil(1) + 1)) + Math.ceil(1);
    dice.setValue(value);
  }
}

export default DieController;
