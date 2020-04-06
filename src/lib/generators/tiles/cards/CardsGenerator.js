import Generator from '../../Generator';
import ChancesGenerator from './generators/ChancesGenerator';
import PossibilitiesGenerator from './generators/PossibilitiesGenerator';

class CardsGenerator extends Generator {
  static generateAll() {
    return [
      ChancesGenerator.generateAll(),
      PossibilitiesGenerator.generateAll(),
    ];
  }
}

export default CardsGenerator;
