import { categoryProductsList } from '../constants/products.js';

const parsCategory = (category) => {
  const isString = typeof category === 'string';

  if (!isString) return;

  const isCategory = (category) => categoryProductsList.includes(category);

  if (isCategory(category)) return category;
};

const parseNumber = (number) => {
  const isString = typeof number === 'string';

  if (!isString) return;

  const parsedNumber = parseInt(number);

  if (Number.isNaN(parsedNumber)) {
    return;
  }
  return parsedNumber;
};

export const parseFilterParams = (query) => {
  const { category, minPrice, maxPrice } = query;
  const parsedCategory = parsCategory(category);
  const parsedMinPrice = parseNumber(minPrice);
  const parsedMaxPrice = parseNumber(maxPrice);

  return {
    category: parsedCategory,
    minPrice: parsedMinPrice,
    maxPrice: parsedMaxPrice,
  };
};
