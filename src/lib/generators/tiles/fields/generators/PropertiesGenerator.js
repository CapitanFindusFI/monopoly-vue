import Property from '../../../../models/tiles/field/fields/Property';
import FieldColors from '../../../../models/tiles/field/FieldColors';
import PictureUtils from '../../../../utils/PictureUtils';
import Generator from '../../../Generator';

class PropertiesGenerator extends Generator {

  static generateAll() {
    return [
      ...PropertiesGenerator.generatePinkProperties(),
      ...PropertiesGenerator.generateBlueProperties(),
      ...PropertiesGenerator.generateOrangeProperties(),
      ...PropertiesGenerator.generateBrownProperties(),
      ...PropertiesGenerator.generateRedProperties(),
      ...PropertiesGenerator.generateYellowProperties(),
      ...PropertiesGenerator.generateGreenProperties(),
      ...PropertiesGenerator.generatePurpleProperties(),
    ];
  }

  static generatePinkProperties() {
    const color = FieldColors.PINK;
    const picture = PictureUtils.generatePlaceholder(color);

    const property1 = new Property({
      color,
      picture,
      name: 'lbl.pink1.name',
      cost: 150,
      index: 1,
    });

    const property2 = new Property({
      color,
      picture,
      name: 'lbl.pink2.name',
      cost: 200,
      index: 3,
    });

    return [property1, property2];
  }

  static generateBlueProperties() {
    const color = FieldColors.BLUE;
    const picture = PictureUtils.generatePlaceholder(color);

    const property1 = new Property({
      color,
      picture,
      name: 'lbl.blue1.name',
      cost: 250,
      index: 5,
    });

    const property2 = new Property({
      color,
      picture,
      name: 'lbl.blue2.name',
      cost: 250,
      index: 7,
    });

    const property3 = new Property({
      color,
      picture,
      name: 'lbl.blue3.name',
      cost: 250,
      index: 8,
    });

    return [property1, property2, property3];
  }

  static generateOrangeProperties() {
    const color = FieldColors.ORANGE;
    const picture = PictureUtils.generatePlaceholder(color);

    const property1 = new Property({
      color,
      picture,
      name: 'lbl.orange1.name',
      cost: 350,
      index: 10,
    });

    const property2 = new Property({
      color,
      picture,
      name: 'lbl.orange2.name',
      cost: 350,
      index: 12,
    });

    const property3 = new Property({
      color,
      picture,
      name: 'lbl.orange3.name',
      cost: 400,
      index: 13,
    });

    return [property1, property2, property3];
  }

  static generateBrownProperties() {
    const color = FieldColors.BROWN;
    const picture = PictureUtils.generatePlaceholder(color);

    const property1 = new Property({
      color,
      picture,
      name: 'lbl.brown1.name',
      cost: 450,
      index: 15,
    });

    const property2 = new Property({
      color,
      picture,
      name: 'lbl.brown2.name',
      cost: 450,
      index: 17,
    });

    const property3 = new Property({
      color,
      picture,
      name: 'lbl.brown3.name',
      cost: 500,
      index: 18,
    });

    return [property1, property2, property3];
  }

  static generateRedProperties() {
    const color = FieldColors.RED;
    const picture = PictureUtils.generatePlaceholder(color);

    const property1 = new Property({
      color,
      picture,
      name: 'lbl.red1.name',
      cost: 550,
      index: 20,
    });

    const property2 = new Property({
      color,
      picture,
      name: 'lbl.red2.name',
      cost: 550,
      index: 22,
    });

    const property3 = new Property({
      color,
      picture,
      name: 'lbl.red3.name',
      cost: 600,
      index: 23,
    });

    return [property1, property2, property3];
  }

  static generateYellowProperties() {
    const color = FieldColors.YELLOW;
    const picture = PictureUtils.generatePlaceholder(color);

    const property1 = new Property({
      color,
      picture,
      name: 'lbl.yellow1.name',
      cost: 650,
      index: 25,
    });

    const property2 = new Property({
      color,
      picture,
      name: 'lbl.yellow2.name',
      cost: 650,
      index: 26,
    });

    const property3 = new Property({
      color,
      picture,
      name: 'lbl.yellow3.name',
      cost: 700,
      index: 28,
    });

    return [property1, property2, property3];
  }

  static generateGreenProperties() {
    const color = FieldColors.GREEN;
    const picture = PictureUtils.generatePlaceholder(color);

    const property1 = new Property({
      color,
      picture,
      name: 'lbl.green1.name',
      cost: 750,
      index: 30,
    });

    const property2 = new Property({
      color,
      picture,
      name: 'lbl.green2.name',
      cost: 750,
      index: 31,
    });

    const property3 = new Property({
      color,
      picture,
      name: 'lbl.green3.name',
      cost: 800,
      index: 33,
    });

    return [property1, property2, property3];
  }

  static generatePurpleProperties() {
    const color = FieldColors.PURPLE;
    const picture = PictureUtils.generatePlaceholder(color);

    const property1 = new Property({
      color,
      picture,
      name: 'lbl.purple1.name',
      cost: 900,
      index: 36,
    });

    const property2 = new Property({
      color,
      picture,
      name: 'lbl.purple2.name',
      cost: 1000,
      index: 38,
    });

    return [property1, property2];
  }
}

export default PropertiesGenerator;
