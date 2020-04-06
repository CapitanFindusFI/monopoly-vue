class MissingRelativesError extends Error {
  constructor(player, property) {
    super();
    this.message = `Player ${player.getName()} is missing some ${property.getName()} relatives`;
  }
}

export default MissingRelativesError;
