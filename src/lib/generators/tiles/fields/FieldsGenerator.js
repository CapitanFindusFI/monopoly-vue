import PropertiesGenerator from './generators/PropertiesGenerator';
import SocietiesGenerator from './generators/SocietiesGenerator';
import StationsGenerator from './generators/StationsGenerator';
import Generator from '../../Generator';

class FieldsGenerator extends Generator {
  static generateAll() {
    return [
      ...PropertiesGenerator.generateAll(),
      ...SocietiesGenerator.generateAll(),
      ...StationsGenerator.generateAll(),
    ];
  }
}

export default FieldsGenerator;
