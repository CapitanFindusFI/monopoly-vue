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
}

export default TilesGenerator;
