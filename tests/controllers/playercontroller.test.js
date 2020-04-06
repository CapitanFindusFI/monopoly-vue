import PlayerController from '../../src/lib/controllers/PlayerController';
import Player from '../../src/lib/models/Player';

const playerController = new PlayerController();
const defaultPlayer = () => new Player({
  name: 'foo bar',
});

describe('player controller test suite', () => {
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
