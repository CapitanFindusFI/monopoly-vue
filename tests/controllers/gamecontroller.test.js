import GameController from '../../src/lib/GameController';
import DieController from '../../src/lib/controllers/DieController';

jest.mock('../../src/lib/controllers/DieController');

DieController.prototype.getDiceValue = jest.fn()
  .mockImplementation(() => 3);

const gameController = new GameController();
const playerNames = [
  'pippo baudo',
  'raimondo vianello',
  'enrico varriale',
];

describe('game controller test suite', () => {
  it('should correctly generate game players with default settings', () => {
    gameController.setupGame(playerNames);

    const players = gameController.getPlayers();
    const playersMoney = players.map((p) => p.getMoney());
    expect(playersMoney)
      .toEqual([2000, 2000, 2000]);
  });

  it('should correctly generate game players with overwritten settings', () => {
    gameController.setupGame(playerNames, {
      playersInitialMoney: 3000,
    });

    const players = gameController.getPlayers();
    const playersMoney = players.map((p) => p.getMoney());

    expect(playersMoney)
      .toEqual([3000, 3000, 3000]);
  });

  it('should correctly begin game and move two players', () => {
    gameController.setupGame(playerNames);
    gameController.beginGame();

    let activePlayer = gameController.getActivePlayer();

    expect(activePlayer.getName())
      .toBe('pippo baudo');
    expect(activePlayer.getTileIndex())
      .toBe(3);

    gameController.nextTurn();

    activePlayer = gameController.getActivePlayer();

    expect(activePlayer.getName())
      .toBe('raimondo vianello');
    expect(activePlayer.getTileIndex())
      .toBe(3);

    expect(gameController.getTurnNumber())
      .toBe(2);

  });
});
