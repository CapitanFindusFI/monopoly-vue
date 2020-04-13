import GameController from '../../src/lib/controllers/GameController';
import playerMocks from '../mocks/player.mock';

const gameController = new GameController();
const defaultPlayer = playerMocks.getPlayer('foobar')

describe('game controller test suite', () => {
  let usePlayer;

  beforeEach(() => {
    usePlayer = defaultPlayer();
  });

  it('should correctly move player for a few tiles', () => {
    playerController.movePlayer(usePlayer, 5);

    expect(usePlayer.getTileIndex())
      .toBe(5);

    playerController.movePlayer(usePlayer, 10);

    expect(usePlayer.getTileIndex())
      .toBe(15);

    playerController.movePlayer(usePlayer, 3);

    expect(usePlayer.getTileIndex())
      .toBe(18);

    playerController.movePlayer(usePlayer, 2);

    expect(usePlayer.getTileIndex())
      .toBe(20);

    playerController.movePlayer(usePlayer, 20);

    expect(usePlayer.getTileIndex())
      .toBe(1);
  });
});
