import PictureUtils from '../../../../utils/PictureUtils';
import Station from '../../../../models/tiles/field/fields/Station';
import Generator from '../../../Generator';

class StationsGenerator extends Generator {
  static generateAll() {
    return [
      StationsGenerator.generateSouthStation(),
      StationsGenerator.generateWestStation(),
      StationsGenerator.generateNorthStation(),
      StationsGenerator.generateEastStation(),
    ];
  }

  static generateSouthStation() {
    return new Station({
      name: 'lbl.station.south',
      picture: PictureUtils.generatePlaceholder('#fff'),
      cost: 480,
      index: 5,
    });
  }

  static generateWestStation() {
    return new Station({
      name: 'lbl.station.west',
      picture: PictureUtils.generatePlaceholder('#fff'),
      cost: 480,
      index: 15,
    });
  }

  static generateNorthStation() {
    return new Station({
      name: 'lbl.station.north',
      picture: PictureUtils.generatePlaceholder('#fff'),
      cost: 480,
      index: 25,
    });
  }

  static generateEastStation() {
    return new Station({
      name: 'lbl.station.east',
      picture: PictureUtils.generatePlaceholder('#fff'),
      cost: 480,
      index: 35,
    });
  }
}

export default StationsGenerator;
