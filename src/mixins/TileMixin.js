import Tile from '../lib/models/tiles/Tile';

const TileMixin = {
  props: {
    tileItem: {
      type: Tile,
      required: true,
    },
  },
  methods: {
    onStepUp() {
      console.log(this.tileItem);
    },
  },
  mounted() {
    console.log('Mounted tile', this.tileItem);
  },
};

export default TileMixin;
