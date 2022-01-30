'use strict';
import * as calc from './calculations.js';

export {
  ResultMessage,
  renderWordsResult,
  renderSymbolsResult,
  renderSymbolsWithoutSpacesResult,
  renderPercentResult,
};

const ResultMessage = document.querySelector('.result_msg');

function renderWordsResult(text) {
  if (isWordsChecked() && document.querySelector('.words_result') != null) {
    document.querySelector('.words_result').remove();
  }

  if (isWordsChecked()) {
    let counter = calc.wordsCount(text);
    let message = document.createElement('div');

    message.className = 'words_result';
    message.innerText = `Количество слов: ${counter}`;

    ResultMessage.append(message);
  }
}

function renderSymbolsResult(text) {
  if (isSymbolsChecked() && document.querySelector('.symbols_result') != null) {
    document.querySelector('.symbols_result').remove();
  }

  if (isSymbolsChecked()) {
    let counter = calc.symbolsCount(text);
    let message = document.createElement('div');

    message.className = 'symbols_result';
    message.innerText = `Количество символов: ${counter}`;

    ResultMessage.append(message);
  }
}

function renderSymbolsWithoutSpacesResult(text) {
  if (
    isSymbolsWithoutSpacesChecked() &&
    document.querySelector('.symbols_without_spaces_result') != null
  ) {
    document.querySelector('.symbols_without_spaces_result').remove();
  }

  if (isSymbolsWithoutSpacesChecked()) {
    let counter = calc.symbolsWithoutSpacesCount(text);
    let message = document.createElement('div');

    message.className = 'symbols_without_spaces_result';
    message.innerText = `Количество символов (без учета пробелов): ${counter}`;

    ResultMessage.append(message);
  }
}

function renderPercentResult(text) {
  if (isPercentChecked() && document.querySelector('.percent_result') != null) {
    document.querySelector('.percent_result').remove();
  }
  if (isPercentChecked() && document.querySelector('.percent_list') != null) {
    document.querySelector('.percent_list').remove();
  }

  if (isPercentChecked()) {
    let percentsCounter = calc.perPecentCount(text);
    let message = document.createElement('div');
    let list = document.createElement('ul');

    message.className = 'percent_result';
    message.innerText = 'Процентное соотношение символов в тексте';
    list.className = 'percent_list';

    for (let key in percentsCounter) {
      let listItem = document.createElement('li');
      listItem.innerText = `${key}: ${percentsCounter[key]}%`;
      list.append(listItem);
    }


    ResultMessage.append(message);
    ResultMessage.append(list);
  }
}

function isWordsChecked() {
  let checkbox = document.querySelector('#words');

  return checkbox.checked;
}

function isSymbolsChecked() {
  let checkbox = document.querySelector('#symbols');

  return checkbox.checked;
}

function isSymbolsWithoutSpacesChecked() {
  let checkbox = document.querySelector('#symbols_without_spaces');

  return checkbox.checked;
}

function isPercentChecked() {
  let checkbox = document.querySelector('#percent');

  return checkbox.checked;
}
