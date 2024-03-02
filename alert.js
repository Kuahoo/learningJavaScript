'use strict';
let promptText = prompt('Pick any number', '');
let message = (promptText > 0 ) ? 1 : 
    (promptText < 0) ? -1 : 
    (promptText === 0) ? 0 : NaN;
alert(message);
