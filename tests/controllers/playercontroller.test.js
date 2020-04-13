import PlayerController from '../../src/lib/controllers/PlayerController';
import playerMocks from '../mocks/player.mock';

const playerController = new PlayerController();
const defaultPlayer = playerMocks.getPlayer('foobar');

describe('player controller test suite', () => {
  let usePlayer;

  beforeEach(() => {
    usePlayer = defaultPlayer;
  });

  it('should correctly move player for a few tiles', () => {
    playerController.moveActivePlayer(usePlayer, 5);

    expect(usePlayer.getTileIndex())
      .toBe(5);

    playerController.moveActivePlayer(usePlayer, 10);

    expect(usePlayer.getTileIndex())
      .toBe(15);

    playerController.moveActivePlayer(usePlayer, 3);

    expect(usePlayer.getTileIndex())
      .toBe(18);

    playerController.moveActivePlayer(usePlayer, 2);

    expect(usePlayer.getTileIndex())
      .toBe(20);

    playerController.moveActivePlayer(usePlayer, 20);

    expect(usePlayer.getTileIndex())
      .toBe(1);
  });
});
