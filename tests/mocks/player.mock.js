import Player from '../../src/lib/models/Player';

const getPlayer = (name) => new Player({
  name,
});

export default {
  getPlayer,
};
