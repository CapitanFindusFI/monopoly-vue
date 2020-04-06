import FieldsGenerator from './field/FieldsGenerator';
import SpecialsGenerator from './specials/SpecialsGenerator';
import CardsGenerator from './cards/CardsGenerator';
import Generator from '../Generator';

class TilesGenerator extends Generator {
  static generateAll() {
    return [
      FieldsGenerator.generateAll(),
      SpecialsGenerator.generateAll(),
      CardsGenerator.generateAll()
    ];
  }
}

export default TilesGenerator;
