class StringBuilder {

    constructor(_value) {
    this._value = _value;
  }

  get value() { }

  static append(str) { }

  static prepend(str) { }

  static pad(str) { }
  
} 




const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='