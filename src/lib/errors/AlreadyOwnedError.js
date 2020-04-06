class AlreadyOwnedError extends Error {
  constructor(player, property) {
    super();
    this.message = `Player ${player.getName()} already owns ${property.getName()}`;
  }
}

export default AlreadyOwnedError;
