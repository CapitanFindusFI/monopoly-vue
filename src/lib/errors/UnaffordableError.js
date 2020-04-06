class UnaffordableError extends Error {
  constructor(player, amount) {
    super();
    this.message = `Player ${player.getName()} can't afford ${amount}`;
  }
}

export default UnaffordableError;
