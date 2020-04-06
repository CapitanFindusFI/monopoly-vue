import PictureUtils from '../../../../utils/PictureUtils';
import Station from '../../../../models/tiles/field/fields/Station';
import Generator from '../../../Generator';

class StationsGenerator extends Generator {
  static generateAll() {
    return [
      StationsGenerator.generateNorthStation(),
      StationsGenerator.generateEastStation(),
      StationsGenerator.generateSouthStation(),
      StationsGenerator.generateWestStation(),
    ];
  }

  static generateNorthStation() {
    return new Station({
      name: 'lbl.station.north',
      picture: PictureUtils.generatePlaceholder('#fff'),
      cost: 480,
    });
  }

  static generateEastStation() {
    return new Station({
      name: 'lbl.station.east',
      picture: PictureUtils.generatePlaceholder('#fff'),
      cost: 480,
    });
  }

  static generateSouthStation() {
    return new Station({
      name: 'lbl.station.south',
      picture: PictureUtils.generatePlaceholder('#fff'),
      cost: 480,
    });
  }

  static generateWestStation() {
    return new Station({
      name: 'lbl.station.west',
      picture: PictureUtils.generatePlaceholder('#fff'),
      cost: 480,
    });
  }
}

export default StationsGenerator;
