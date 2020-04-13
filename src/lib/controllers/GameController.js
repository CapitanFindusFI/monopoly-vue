import PlayerController from './PlayerController';
import DieController from './DieController';
import PropertyController from './PropertyController';
import UnaffordableError from '../errors/UnaffordableError';
import IncongruentOwnerError from '../errors/IncongruentOwnerError';
import HouseLimitReachedError from '../errors/HouseLimitReachedError';
import AlreadyOwnedError from '../errors/AlreadyOwnedError';
import MissingRelativesError from '../errors/MissingRelativesError';
import defaultGameSettings from '../settings/game.settings';
import PlayerGenerator from '../generators/player/PlayerGenerator';

const MAX_HOUSES = 5;

class GameController {
  constructor() {
    this.gameSettings = defaultGameSettings;

    this.playerController = new PlayerController();
    this.dieController = new DieController();
    this.propertyController = new PropertyController();

    this.turnNumber = 0;
    this.players = [];
    this.currentPlayerIndex = 0;
  }

  getTurnNumber() {
    return this.turnNumber;
  }

  getPlayers() {
    return this.players;
  }

  getCurrentPlayerIndex() {
    return this.currentPlayerIndex;
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  beginGame(playerNames, gameSettings = {}) {
    this.gameSettings = { ...defaultGameSettings, ...gameSettings };
    this.players = PlayerGenerator.generatePlayers(playerNames, this.gameSettings.playersInitialMoney);
    this.nextTurn();
  }

  nextTurn() {
    if (this.turnNumber > 0) {
      if (this.currentPlayerIndex === this.players.length - 1) {
        this.currentPlayerIndex = 0;
      } else {
        this.currentPlayerIndex += 1;
      }
    }

    this.players.forEach((player, index) => player.setActive(index === this.currentPlayerIndex));

    // roll the dice
    this.dieController.roll();

    const activePlayer = this.getCurrentPlayer();
    const moveValue = this.dieController.getDiceValue();

    this.playerController.movePlayer(activePlayer, moveValue);

    this.turnNumber += 1;
  }

  playerHasPropertyRelatives(player, property) {
    const propertyRelatives = property.getRelatives();
    return propertyRelatives.every((p) => p.owner === player);
  }

  playerCanBuyField(player, field) {
    return this.playerController.canAffordCost(player, field.getCost());
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
    const canAfford = this.playerController.canAffordCost(player, houseCost);
    if (!canAfford) {
      throw new UnaffordableError(player, houseCost);
    }

    this.playerController.applyExpense(player, houseCost);
  }

  playerBuyProperty(player, property) {
    if (property.getOwner() !== player) {
      throw new IncongruentOwnerError(property);
    }

    const propertyCost = property.getCost();
    const canAfford = this.playerController.canAffordCost(player, propertyCost);
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
