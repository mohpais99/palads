
var
    _mathPow = Math.pow,
    arrPush = function (arr, newItem) {
        arr.push(newItem);
    },
    convertToSlug = function (text) {
        return text
            .toLowerCase()
            .replace(/ /g,'-')
            .replace(/[^\w-]+/g,'');
    }

export {
    _mathPow,
    convertToSlug,
    arrPush
}