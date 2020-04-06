import Go from './models/tiles/special/specials/Go';
import Property from './models/tiles/field/fields/Property';

class Game {
  constructor() {
    this.tiles = [];
  }

  generateTiles() {

  }

  generateFieldTiles() {

  }

  generatePropertyTiles() {
    const pink1 = new Property({

    })

    const pink2
  }

  generateSocietyTiles() {

  }

  generateStationTiles() {

  }

  generateCardTiles() {

  }

  generateSpecialTiles() {
    const goTile = new Go({
      name: 'lbl.tile.go',
      picture: 'https://placehold.it/50/50'
    });
  }

  generateTaxTiles() {

  }

}

export default Game;
