const getProductsOfNormalQuality = (pProductList) => {
  return pProductList
    .filter((product) => product.quality === "Normal")
};
console.log(getProductsOfNormalQuality);

const getProductImageWithPngExtension = (pProductList) => {
  return pProductList
    .filter((product) => product.productImage === ".png")
};
console.log(getProductImageWithPngExtension);

const getCalorieOfTheMostExpensiveProduct = (pProductList) => {
  return pProductList
    .filter((product) => product.totalCalories)
    .reduce((max, min) => max.price > min.price ? max : min)
};
console.log(getCalorieOfTheMostExpensiveProduct);

const sortByExpirationDate = (pProductList) => {
  return pProductList
    .sort((productA, productB) => productA.expireDate - productB.expireDate)
};
console.log(sortByExpirationDate);

export {
  getProductsOfNormalQuality,
  getProductImageWithPngExtension,
  getCalorieOfTheMostExpensiveProduct,
  sortByExpirationDate,
};
