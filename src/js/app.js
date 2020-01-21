import {getTableA} from './getATable';
import {getGoldPrices} from './getGoldPrices';
import {scrollSmooth} from './scrollSmooth';

$(document).ready(function () {

    getTableA();
    getGoldPrices();
    scrollSmooth();
});
