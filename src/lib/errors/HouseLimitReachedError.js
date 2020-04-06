class HouseLimitReachedError extends Error {
  constructor(property) {
    super();
    this.message = `Maximum number of houses reached for property: ${property.getName()}`;
  }
}

export default HouseLimitReachedError;
