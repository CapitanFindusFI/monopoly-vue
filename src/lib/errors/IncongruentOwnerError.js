class IncongruentOwnerError extends Error {
  constructor(player, property) {
    super();
    this.message = `Player ${player.getName()} is not the owner of ${property.getName()}`;
  }
}

export default IncongruentOwnerError;
