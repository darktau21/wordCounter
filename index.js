'use strict';

import * as render from './render.js';

const TextField = document.querySelector('#text_field');

TextField.addEventListener('focusout', function () {
  let enteredText = TextField.value;

  render.renderWordsResult(enteredText);
  render.renderSymbolsResult(enteredText);
  render.renderSymbolsWithoutSpacesResult(enteredText);
  render.renderPercentResult(enteredText);
});
