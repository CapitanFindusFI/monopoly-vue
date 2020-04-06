import Generator from '../../../Generator';
import Chance from '../../../../models/tiles/card/cards/Chance';
import PictureUtils from '../../../../utils/PictureUtils';

class ChancesGenerator extends Generator {
  static generateAll() {
    const card1 = new Chance({
      name: 'lbl.chance.generic',
      picture: PictureUtils.generatePlaceholder('orange'),
      action: () => {
        console.log(this);
      },
    });

    const card2 = new Chance({
      name: 'lbl.chance.generic',
      picture: PictureUtils.generatePlaceholder('orange'),
      action: () => {
        console.log(this);
      },
    });

    const card3 = new Chance({
      name: 'lbl.chance.generic',
      picture: PictureUtils.generatePlaceholder('orange'),
      action: () => {
        console.log(this);
      },
    });

    return [card1, card2, card3];
  }
}

export default ChancesGenerator;
