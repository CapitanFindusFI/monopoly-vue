import Society from '../../../../models/tiles/field/fields/Society';
import PictureUtils from '../../../../utils/PictureUtils';
import Generator from '../../../Generator';

class SocietiesGenerator extends Generator {
  static generateAll() {
    return [
      SocietiesGenerator.generateWaterSociety(),
      SocietiesGenerator.generateElectricitySociety()
    ];
  }

  static generateWaterSociety() {
    return new Society({
      name: 'lbl.society.water',
      picture: PictureUtils.generatePlaceholder('#fff'),
      cost: 250,
    });
  }

  static generateElectricitySociety() {
    return new Society({
      name: 'lbl.society.electricity',
      picture: PictureUtils.generatePlaceholder('#fff'),
      cost: 250,
    });
  }
}

export default SocietiesGenerator;
