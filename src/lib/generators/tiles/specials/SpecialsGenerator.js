import Go from '../../../models/tiles/special/specials/Go';
import PictureUtils from '../../../utils/PictureUtils';
import Parking from '../../../models/tiles/special/specials/Parking';
import PrisonTransit from '../../../models/tiles/special/specials/PrisonTransit';
import Prison from '../../../models/tiles/special/specials/Prison';
import Generator from '../../Generator';

class SpecialsGenerator extends Generator {
  static generateAll() {
    return [
      SpecialsGenerator.generateStart(),
      SpecialsGenerator.generateParking(),
      SpecialsGenerator.generatePrison(),
      SpecialsGenerator.generatePrisonTransit(),
    ];
  }

  static generateStart() {
    return new Go({
      name: 'lbl.special.go',
      picture: PictureUtils.generatePlaceholder('#fff'),
      index: 0,
    });
  }

  static generateParking() {
    return new Parking({
      name: 'lbl.special.parking',
      picture: PictureUtils.generatePlaceholder('#fff'),
      index: 20,
    });
  }

  static generatePrison() {
    return new Prison({
      name: 'lbl.special.prison',
      picture: PictureUtils.generatePlaceholder('#fff'),
      index: 30,
    });
  }

  static generatePrisonTransit() {
    return new PrisonTransit({
      name: 'lbl.special.prisontransit',
      picture: PictureUtils.generatePlaceholder('#fff'),
      index: 10,
    });
  }
}

export default SpecialsGenerator;
