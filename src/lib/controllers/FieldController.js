class FieldController {
  setFieldOwner(field, player) {
    field.setOwner(player);
  }

  getFieldRelatives(field) {
    return field.getRelatives();
  }

  getFieldCost(field) {
    return field.getCost();
  }

}

export default FieldController;
