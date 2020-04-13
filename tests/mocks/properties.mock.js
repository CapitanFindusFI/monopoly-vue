import Property from '../../src/lib/models/tiles/field/fields/Property';

const mockProperty = () => new Property({
  color: 'red',
  name: 'red property',
  cost: 500,
  houseCost: 250,
});

export default {
  mockProperty,
};
