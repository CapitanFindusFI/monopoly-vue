import Generator from '../../Generator';
import Tax from '../../../models/tiles/tax/Tax';
import PictureUtils from '../../../utils/PictureUtils';

class TaxesGenerator extends Generator {
  static generateAll() {
    const tax1 = new Tax({
      name: 'lbl.tax.patrimonial',
      picture: PictureUtils.generatePlaceholder('#fff'),
      index: 4,
    });

    const tax2 = new Tax({
      name: 'lbl.tax.luxury',
      picture: PictureUtils.generatePlaceholder('#fff'),
      index: 37,
    });

    return [tax1, tax2];
  }
}

export default TaxesGenerator;
