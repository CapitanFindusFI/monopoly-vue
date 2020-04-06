import Generator from '../../../Generator';
import PictureUtils from '../../../../utils/PictureUtils';
import Possibility from '../../../../models/tiles/card/cards/Possibility';

class PossibilitiesGenerator extends Generator {
  static generateAll() {
    const card1 = new Possibility({
      name: 'lbl.possibility.generic',
      picture: PictureUtils.generatePlaceholder('blue'),
      action: () => {
        console.log(this);
      },
    });

    const card2 = new Possibility({
      name: 'lbl.possibility.generic',
      picture: PictureUtils.generatePlaceholder('blue'),
      action: () => {
        console.log(this);
      },
    });

    const card3 = new Possibility({
      name: 'lbl.possibility.generic',
      picture: PictureUtils.generatePlaceholder('blue'),
      action: () => {
        console.log(this);
      },
    });

    return [card1, card2, card3];
  }
}

export default PossibilitiesGenerator;
