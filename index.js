'use strict';

module.exports = (string, reviver, defaultValue, onError) => {
    try {
        if(!string) throw new Error('');
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
