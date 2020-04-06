import DieController from '../../src/lib/controllers/DieController';
import Die from '../../src/lib/models/Die';

const controller = new DieController();
const die = new Die();

describe('it should correcly handle dice rolling', () => {
  it('should always be between 1 and 6', () => {
    [
      ...Array(50)
        .keys(),
    ].forEach(() => {
      controller.roll(die);
      expect(die.getValue())
        .toBeLessThan(7);
      expect(die.getValue())
        .toBeGreaterThan(0);
    });
  });
});
