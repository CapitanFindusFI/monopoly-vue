class PlayerController {
  getPlayerPropertyById(player, propertyId) {
    const playerProperties = player.getProperties();
    return playerProperties.find((property) => property.id === propertyId);
  }

  getPlayerPropertyIndexById(player, propertyId) {
    const playerProperties = player.getProperties();
    return playerProperties.findIndex((property) => property.id === propertyId);
  }

  playerHasProperty(player, propertyId) {
    return this.getPlayerPropertyIndexById(player, propertyId) !== -1;
  }

  addPlayerProperty(player, property) {
    const playerProperties = player.getProperties();
    playerProperties.push(property);

    player.setProperties(playerProperties);
  }

  removePlayerProperty(player, property) {
    const properties = player.getProperties();
    const propertyIndex = this.getPlayerPropertyIndexById(property.id);
    if (propertyIndex === -1) {
      throw new Error('Property to remove not found');
    }

    const updatedProperties = properties.splice(propertyIndex, 1);
    player.setProperties(updatedProperties);
  }

  canAffordCost(player, cost) {
    const playerBudget = player.getMoney();

    return playerBudget >= cost;
  }

  applyExpense(player, cost) {
    player.setMoney(player.getMoney() - cost);
  }
}

export default PlayerController;
