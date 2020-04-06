class PlayerController {
  setPlayerActive(player) {
    player.setActive(true);
  }

  getPlayerBudget(player) {
    return player.getMoney();
  }

  setPlayerBudget(player, budget) {
    player.setMoney(budget);
  }

  getPlayerProperties(player) {
    return player.getProperties();
  }

  setPlayerProperties(player, properties) {
    player.setProperties(properties);
  }

  getPlayerPropertyById(player, propertyId) {
    const playerProperties = this.getPlayerProperties(player);
    return playerProperties.find((property) => property.id === propertyId);
  }

  getPlayerPropertyIndexById(player, propertyId) {
    const playerProperties = this.getPlayerProperties(player);
    return playerProperties.findIndex((property) => property.id === propertyId);
  }

  playerHasProperty(player, propertyId) {
    return this.getPlayerPropertyIndexById(player, propertyId) !== -1;
  }

  addPlayerProperty(player, property) {
    const playerProperties = this.getPlayerProperties(player);
    playerProperties.push(property);

    this.setPlayerProperties(player, playerProperties);
  }

  removePlayerProperty(player, property) {
    const properties = player.getProperties();
    const propertyIndex = this.getPlayerPropertyIndexById(property.id);
    if (propertyIndex === -1) {
      throw new Error('Property to remove not found');
    }

    const updatedProperties = properties.splice(propertyIndex, 1);
    this.setPlayerProperties(player, updatedProperties);
  }

  exchangeProperty(fromPlayer, toPlayer, property, cost) {
    if (!this.playerHasProperty(fromPlayer, property)) {
      throw new Error('Sender player does not have target property');
    }

    if (this.playerHasProperty(toPlayer, property)) {
      throw new Error('Receiver player already has target property');
    }

    const receiverBudget = this.getPlayerBudget(toPlayer);
    if (receiverBudget < cost) {
      throw new Error(`Receive player has less than ${cost} money`);
    }

    this.removePlayerProperty(fromPlayer, property);
    this.addPlayerProperty(fromPlayer, property);

    this.setPlayerBudget(toPlayer, (receiverBudget - cost));
  }
}

export default PlayerController;
