module.exports = {compareByPrice};

/**
 * Compares two prices with remove the currency symbol and parse as float
 * Object array should have price element named with "price" e.g. a.price
 */
 function compareByPrice(a, b) {
    var priceA = parseFloat(a.price.substring(1));
    var priceB = parseFloat(b.price.substring(1)); 
    return priceB - priceA;
}
