'use strict';

export {
  wordsCount,
  symbolsCount,
  symbolsWithoutSpacesCount,
  perSymbolsCount,
  perPecentCount,
};

function wordsCount(text) {
  let words = text.split('');
  let counter = 0;
  let wordFlag = false;

  words.push(' ');

  for (let symbol of words) {
    if (symbol != ' ') {
      wordFlag = true;
    }

    if (symbol == ' ' && wordFlag) {
      counter++;
      wordFlag = false;
    }
  }

  return counter;
}

function symbolsCount(text) {
  return text.length;
}

function symbolsWithoutSpacesCount(text) {
  let symbols = text.split('');
  console.log(symbols);
  let length = symbols.length;

  for (let key in symbols) {
    if (symbols[key] == ' ') {
      length--;
    }
  }

  return length;
}

function perSymbolsCount(text) {
  let symbols = text.split('');
  let alphabet = {};

  for (let symbol of symbols) {
    if (symbol == ' ') continue;

    if (alphabet.hasOwnProperty(symbol)) {
      alphabet[symbol] += 1;
    } else {
      alphabet[symbol] = 1;
    }
  }

  return alphabet;
}

function perPecentCount(text) {
  let alphabet = perSymbolsCount(text);
  let symbols = text.split('');
  let symbolsLength = symbols.length;

  for (let symbol of symbols) {
    if (symbol == ' ') {
      symbolsLength--;
    }
  }

  for (let letter in alphabet) {
    alphabet[letter] *= 100;
    alphabet[letter] /= symbolsLength;
    alphabet[letter] = Math.floor(alphabet[letter] * 100) / 100;
  }

  return alphabet;
}
