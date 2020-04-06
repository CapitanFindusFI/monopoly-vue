import PropertiesGenerator from '../src/lib/generators/tiles/fields/generators/PropertiesGenerator';
import StationsGenerator from '../src/lib/generators/tiles/fields/generators/StationsGenerator';
import SocietiesGenerator from '../src/lib/generators/tiles/fields/generators/SocietiesGenerator';
import TilesGenerator from '../src/lib/generators/tiles/TilesGenerator';
import TaxesGenerator from '../src/lib/generators/tiles/taxes/TaxesGenerator';
import FieldsGenerator from '../src/lib/generators/tiles/fields/FieldsGenerator';
import SpecialsGenerator from '../src/lib/generators/tiles/specials/SpecialsGenerator';
import CardsGenerator from '../src/lib/generators/tiles/cards/CardsGenerator';

describe('generators test suite', () => {
  it('should generate correct number of property tiles', () => {
    const tiles = PropertiesGenerator.generateAll();
    expect(tiles)
      .toHaveLength(22);
  });

  it('should generate correct number of station tiles', () => {
    const tiles = StationsGenerator.generateAll();
    expect(tiles)
      .toHaveLength(4);
  });

  it('should generate correct number of society tiles', () => {
    const tiles = SocietiesGenerator.generateAll();
    expect(tiles)
      .toHaveLength(2);
  });

  it('should generate correct number of field tiles', () => {
    const tiles = FieldsGenerator.generateAll();
    expect(tiles)
      .toHaveLength(28);
  });

  it('should generate correct number of taxes fields', () => {
    const tiles = TaxesGenerator.generateAll();
    expect(tiles)
      .toHaveLength(2);
  });

  it('should generate correct number of special tiles', () => {
    const tiles = SpecialsGenerator.generateAll();
    expect(tiles)
      .toHaveLength(4);
  });

  it('should generate correct number of card tiles', () => {
    const tiles = CardsGenerator.generateAll();
    expect(tiles)
      .toHaveLength(6);
  });

  it('should generate all field tiles', () => {
    const tiles = TilesGenerator.generateAll();
    expect(tiles)
      .toHaveLength(40);
  });

  it('should generate ordered tiles', () => {
    const expected = [
      ...Array(40)
        .keys()
    ];
    const tiles = TilesGenerator.generateOrdered();
    const generateIndexes = tiles.map((t) => t.index);

    expect(generateIndexes)
      .toStrictEqual(expected);
  });
});
