"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class exchangeCurrent {
    static toCurrent(money, unit, position = 'left') {
        if (position == 'left')
            return money + ' ' + unit;
        else
            return unit + ' ' + money;
    }
}
exports.exchangeCurrent = exchangeCurrent;
