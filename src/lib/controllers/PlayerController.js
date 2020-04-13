import { MAX_HOUSES, MAX_TILE_INDEX } from '../const/DefinedConst';
import IncongruentOwnerError from '../errors/IncongruentOwnerError';
import MissingRelativesError from '../errors/MissingRelativesError';
import HouseLimitReachedError from '../errors/HouseLimitReachedError';
import UnaffordableError from '../errors/UnaffordableError';
import AlreadyOwnedError from '../errors/AlreadyOwnedError';
import PlayerGenerator from '../generators/player/PlayerGenerator';

class PlayerController {
  constructor(playerNames, initialMoney) {
    this.players = PlayerGenerator.generatePlayers(playerNames, initialMoney);
    this.activePlayer = null;
  }

  getPlayers() {
    return this.players;
  }

  getPlayerByIndex(playerIndex){
    return this.players[playerIndex];
  }

  getActivePlayer() {
    return this.activePlayer;
  }

  setActivePlayer(activePlayerIndex) {
    this.players.forEach((player, index) => player.setActive(index === activePlayerIndex));
    this.activePlayer = this.players[activePlayerIndex];
  }

  getActivePlayerPosition() {
    return this.activePlayer.getTileIndex();
  }

  getPlayerPropertyById(player, propertyId) {
    const playerProperties = player.getProperties();
    return playerProperties.find((property) => property.id === propertyId);
  }

  moveActivePlayer(value) {
    let endTile = this.activePlayer.getTileIndex();
    for (let index = 0; index < value; index += 1) {
      endTile += 1;
      if (endTile === MAX_TILE_INDEX) {
        endTile = 0;
      }
    }

    this.activePlayer.setTileIndex(endTile);
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

  playerHasPropertyRelatives(player, property) {
    const propertyRelatives = property.getRelatives();
    return propertyRelatives.every((p) => p.owner === player);
  }

  playerCanBuyField(player, field) {
    return this.canAffordCost(player, field.getCost());
  }

  playerBuyHouse(player, property) {
    if (property.getOwner() !== player) {
      throw new IncongruentOwnerError(property);
    }

    if (!this.playerHasPropertyRelatives(player, property)) {
      throw new MissingRelativesError(player, property);
    }

    const currentHouses = property.getCurrentHouses();
    if (currentHouses >= MAX_HOUSES) {
      throw new HouseLimitReachedError(property);
    }

    const houseCost = property.getHouseCost();
    const canAfford = this.canAffordCost(player, houseCost);
    if (!canAfford) {
      throw new UnaffordableError(player, houseCost);
    }

    this.applyExpense(player, houseCost);
  }

  playerBuyProperty(player, property) {
    if (property.getOwner() !== player) {
      throw new IncongruentOwnerError(property);
    }

    const propertyCost = property.getCost();
    const canAfford = this.canAffordCost(player, propertyCost);
    if (!canAfford) {
      throw new UnaffordableError(player, propertyCost);
    }
  }

  playerExchangeProperty(senderPlayer, receiverPlayer, property, cost) {
    if (property.getOwner() !== senderPlayer) {
      throw new IncongruentOwnerError(senderPlayer, property);
    }

    if (property.getOwner() === receiverPlayer) {
      throw new AlreadyOwnedError(receiverPlayer, property);
    }

    const receiverBudget = receiverPlayer.getMoney();
    const canAfford = this.canAffordCost(receiverPlayer, cost);
    if (!canAfford) {
      throw new UnaffordableError(receiverPlayer, cost);
    }

    this.removePlayerProperty(senderPlayer, property);
    this.addPlayerProperty(receiverPlayer, property);

    receiverPlayer.setMoney((receiverBudget - cost));
  }
}

export default PlayerController;
