import PlayerController from './PlayerController';
import UnaffordableError from '../errors/UnaffordableError';

const MAX_HOUSES = 5;

class GameController {
  constructor() {
    this.playerController = new PlayerController();
  }

  playerHasPropertyRelatives(player, property) {
    const propertyRelatives = property.getRelatives();
    return propertyRelatives.every((p) => p.owner === player);
  }

  playerCanBuyField(player, field) {
    return this.playerController.canAffordCost(player, field.getCost());
  }

  playerBuyHouse(player, property) {
    if (!property.getCanHaveHouses()) {
      throw new Error('Can\'t buy houses for this type of property');
    }

    if (property.getOwner() !== player) {
      throw new Error('Player does not have target property');
    }

    if (!this.playerHasPropertyRelatives(player, property)) {
      throw new Error('Player does not have all property relatives');
    }

    const currentHouses = property.getCurrentHouses();
    if (currentHouses >= MAX_HOUSES) {
      throw new Error('Maximum number of houses reached for this property');
    }

    const houseCost = property.getHouseCost();
    const canAfford = this.playerController.canAffordCost(player, houseCost);
    if (!canAfford) {
      throw new UnaffordableError(player, houseCost);
    }

    this.playerController.applyExpense(player, houseCost);
  }

  playerBuyProperty(player, property) {
    if (!property.getCanHaveHouses()) {
      throw new Error('Can\'t buy houses for this type of property');
    }

    if (property.getOwner() !== player) {
      throw new Error('Player does not have target property');
    }

    const propertyCost = property.getCost();
    const canAfford = this.playerController.canAffordCost(player, propertyCost);
    if (!canAfford) {
      throw new UnaffordableError(player, propertyCost);
    }
  }

  playerExchangeProperty(senderPlayer, receiverPlayer, property, cost) {
    if (property.getOwner() !== senderPlayer) {
      throw new Error('Sender player does not have target property');
    }

    if (property.getOwner() === receiverPlayer) {
      throw new Error('Receiver player already has target property');
    }

    const receiverBudget = receiverPlayer.getMoney();
    const canAfford = this.playerController.canAffordCost(receiverPlayer, cost);
    if (!canAfford) {
      throw new UnaffordableError(receiverPlayer, cost);
    }

    this.playerController.removePlayerProperty(senderPlayer, property);
    this.playerController.addPlayerProperty(receiverPlayer, property);

    receiverPlayer.setMoney((receiverBudget - cost));
  }
}

export default GameController;
