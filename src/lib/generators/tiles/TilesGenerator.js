import FieldsGenerator from './fields/FieldsGenerator';
import SpecialsGenerator from './specials/SpecialsGenerator';
import CardsGenerator from './cards/CardsGenerator';
import Generator from '../Generator';
import TaxesGenerator from './taxes/TaxesGenerator';

class TilesGenerator extends Generator {
  static generateAll() {
    return [
      ...FieldsGenerator.generateAll(),
      ...SpecialsGenerator.generateAll(),
      ...CardsGenerator.generateAll(),
      ...TaxesGenerator.generateAll(),
    ];
  }

  static generateOrdered() {
    return TilesGenerator.generateAll()
      .sort(TilesGenerator.sortingMethod);
  }

  static sortingMethod(tileA, tileB) {
    const indexA = tileA.index;
    const indexB = tileB.index;
    if (indexA > indexB) {
      return 1;
    }
    if (indexA < indexB) {
      return -1;
    } else {
      return 0;
    }
  }
}

export default TilesGenerator;
