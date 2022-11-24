var sellingPrice = 199;
var listingPrice = 799;

var discoutPercentage = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log(discoutPercentage);

var displayDiscountPercentage = Math.round(discoutPercentage);

console.log(displayDiscountPercentage + "% off");
