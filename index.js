'use strict';

module.exports = (string, reviver, defaultValue, onError) => {
    try {
        return JSON.parse(string, reviver)
    } catch (error) {
        onError && onError(error);
        if(defaultValue) {
            return defaultValue;
        } else {
            if(string.trim().chartAt(0) === '[') {
                return [];
            } else {
                return {};
            }
        }
    }
};