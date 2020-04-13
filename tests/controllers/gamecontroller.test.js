import GameController from '../../src/lib/GameController';
import DieController from '../../src/lib/controllers/DieController';

jest.mock('../../src/lib/controllers/DieController', () => {
  return jest.fn()
    .mockImplementation(() => ({
      roll: jest.fn()
        .mockImplementation(() => null),
      getDiceValue: jest.fn()
        .mockImplementationOnce(() => 3)
        .mockImplementationOnce(() => 3)
        .mockImplementationOnce(() => 4),
    }));
});

const gameController = new GameController();
const playerNames = [
  'pippo baudo',
  'raimondo vianello',
  'enrico varriale',
];

const spyOnMethods = {
  handlePlayerStandingOnField: jest.spyOn(gameController, 'handlePlayerStandingOnField'),
  handlePlayerStandingOnSpecial: jest.spyOn(gameController, 'handlePlayerStandingOnSpecial'),
  handlePlayerStandingOnTax: jest.spyOn(gameController, 'handlePlayerStandingOnTax'),
  handlePlayerStandingOnCard: jest.spyOn(gameController, 'handlePlayerStandingOnCard'),
};

describe('game controller test suite', () => {
  beforeEach(() => {
    DieController.mockClear();
  });

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

  it('game controller should call correct methods', () => {
    gameController.setupGame(playerNames);
    gameController.beginGame();

    expect(spyOnMethods.handlePlayerStandingOnField)
      .toBeCalled();
  });

  it('game controller should call correct methods, simplified with a single player', () => {
    gameController.setupGame(['pippo baudo']);
    gameController.beginGame();

    let activePlayer = gameController.getActivePlayer();
    expect(activePlayer.getName())
      .toBe('pippo baudo');
    expect(activePlayer.getTileIndex())
      .toBe(3);

    gameController.nextTurn();

    activePlayer = gameController.getActivePlayer();
    expect(activePlayer.getName())
      .toBe('pippo baudo');
    expect(activePlayer.getTileIndex())
      .toBe(6);

    gameController.nextTurn();

    activePlayer = gameController.getActivePlayer();
    expect(activePlayer.getName())
      .toBe('pippo baudo');
    expect(activePlayer.getTileIndex())
      .toBe(10);

    expect(spyOnMethods.handlePlayerStandingOnField)
      .toHaveBeenCalledTimes(2);

    expect(spyOnMethods.handlePlayerStandingOnSpecial)
      .toHaveBeenCalledTimes(1);
  });
});
