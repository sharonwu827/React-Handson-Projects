export class PasswordServices {
  static getRandomNumbers() {
    let randomNumber = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    return randomNumber;
  }

  static getRandomSymbols() {
    let symbolStr = "!@#$%^&*()[]/";
    let randomSymbol = symbolStr[Math.floor(Math.random() * symbolStr.length)];
    return randomSymbol;
  }

  static getRandomLowerCase() {
    let randomLowerCaseLetter = String.fromCharCode(
      Math.floor(Math.random() * 26) + 97
    );
    return randomLowerCaseLetter;
  }

  static getRandomUpperCase() {
    let randomUpperCaseLetter = String.fromCharCode(
      Math.floor(Math.random() * 26) + 65
    );
    return randomUpperCaseLetter;
  }

  static getPasswordObj(state) {
    let passwordObj = {};
    for (let key of Object.keys(state)) {
      if (typeof state[key] === "boolean" && state[key]) {
        passwordObj = {
          ...passwordObj,
          [key]: state[key],
        };
      }
    }
    return passwordObj;
  }
  static generatePassword(passwordObj, passwordLength) {
    let thePassword = "";
    for (
      let i = 0;
      i < Number(passwordLength);
      i += Object.keys(passwordObj).length
    ) {
      if (passwordObj.lower) thePassword += `${this.getRandomLowerCase()}`;
      if (passwordObj.upper) thePassword += `${this.getRandomUpperCase()}`;
      if (passwordObj.symbol) thePassword += `${this.getRandomSymbols()}`;
      if (passwordObj.number) thePassword += `${this.getRandomNumbers()}`;
    }
    return thePassword.slice(0, passwordLength);
  }
}
