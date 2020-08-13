'use strict';

module.exports = (string, reviver, defaultValue, onError) => {
    try {
        return JSON.parse(string, reviver)
    } catch (error) {
        onError && onError(error);
        return defaultValue;
    }
};