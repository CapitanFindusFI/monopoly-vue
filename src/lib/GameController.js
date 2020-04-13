import PlayerController from './controllers/PlayerController';
import DieController from './controllers/DieController';
import TileController from './controllers/TileController';
import defaultGameSettings from './settings/game.settings';
import Field from './models/tiles/field/Field';
import Special from './models/tiles/special/Special';
import Tax from './models/tiles/tax/Tax';

class GameController {
  constructor() {
    this.gameSettings = defaultGameSettings;

    this.turnNumber = 0;
    this.playersNumber = 0;
    this.currentPlayerIndex = 0;

    this.gameIsRunning = false;
  }

  getTurnNumber() {
    return this.turnNumber;
  }

  getPlayers() {
    return this.playerController.getPlayers();
  }

  getActivePlayer() {
    return this.playerController.getActivePlayer();
  }

  getPlayerByIndex(playerIndex) {
    return this.playerController.getPlayerByIndex(playerIndex);
  }

  getTiles() {
    return this.tileController.getTiles();
  }

  setupGame(playerNames, gameSettings = {}) {
    this.gameSettings = { ...defaultGameSettings, ...gameSettings };
    const { playersInitialMoney } = this.gameSettings;

    this.currentPlayerIndex = 0;
    this.turnNumber = 0;

    this.playerController = new PlayerController(playerNames, playersInitialMoney);
    this.dieController = new DieController();
    this.tileController = new TileController();

    this.playersNumber = playerNames.length;
  }

  beginGame() {
    this.gameIsRunning = true;
    this.nextTurn();
  }

  nextTurn() {
    if (this.turnNumber > 0) {
      if (this.currentPlayerIndex === this.playersNumber - 1) {
        this.currentPlayerIndex = 0;
      } else {
        this.currentPlayerIndex += 1;
      }
    }
    this.playerController.setActivePlayer(this.currentPlayerIndex);

    // roll the dice
    this.dieController.roll();
    const diceValue = this.dieController.getDiceValue();
    this.playerController.moveActivePlayer(diceValue);

    this.handlePlayerPosition();

    this.turnNumber += 1;
  }

  handlePlayerPosition() {
    const currentPlayer = this.playerController.getActivePlayer();
    const playerStandingTile = this.tileController.getTileByIndex(currentPlayer.getTileIndex());
    if (playerStandingTile instanceof Field) {
      // FIELD
      this.handlePlayerStandingOnField(currentPlayer, playerStandingTile);
    } else if (playerStandingTile instanceof Special) {
      // SPECIAL
      this.handlePlayerStandingOnSpecial(currentPlayer, playerStandingTile);
    } else if (playerStandingTile instanceof Tax) {
      // TAX
      this.handlePlayerStandingOnTax(currentPlayer, playerStandingTile);
    } else {
      // CARD
      this.handlePlayerStandingOnCard(currentPlayer, playerStandingTile);
    }
  }

  handlePlayerStandingOnField(player, field) {
    if (field.getCanBeBought()) {
      // ask if user wants to buy
    }
    console.log(player, field);
  }

  handlePlayerStandingOnSpecial(player, special) {
    console.log(player, special);
  }

  handlePlayerStandingOnTax(player, tax) {
    console.log(player, tax);
  }

  handlePlayerStandingOnCard(player, card) {
    console.log(player, card);
  }
}

export default GameController;
