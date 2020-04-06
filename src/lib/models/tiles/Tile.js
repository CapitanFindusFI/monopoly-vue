class Tile {
  constructor({ type, name, picture, index }) {
    this.type = type;
    this.name = name;
    this.picture = picture;
    this.index = index;

    this.fieldContent = null;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getPicture() {
    return this.picture;
  }

  setPicture(picture) {
    this.picture = picture;
  }

  getIndex(){
    return this.index;
  }

  setIndex(index){
    this.index = index;
  }

  getFieldContent() {
    return this.fieldContent;
  }

  setFieldContent(fieldContent) {
    this.fieldContent = fieldContent;
  }

  // eslint-disable-next-line no-unused-vars,class-methods-use-this
  onStepUp(player) {
    throw new Error('Must be implemented in exteding classes');
  }
}

export default Tile;
