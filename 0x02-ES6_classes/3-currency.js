class Currency {
  // Constructor to initialize the code and name attributes
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter for the code attribute
  get code() {
    return this._code;
  }

  // Setter for the code attribute
  set code(newCode) {
    this._code = newCode;
  }

  // Getter for the name attribute
  get name() {
    return this._name;
  }

  // Setter for the name attribute
  set name(newName) {
    this._name = newName;
  }

  // Method to display the currency in the "name (code)" format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

// Exporting the Currency class as a module to be used in other files
export default Currency;
