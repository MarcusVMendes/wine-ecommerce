const BASE_URL = 'https://wine-back-test.herokuapp.com/products?';

export default async function requestProductList(pageNumber, productLimit) {
    const response = await fetch(`${BASE_URL}page=${pageNumber}&limit=${productLimit}`);
    const products = await response.json();

    return products;
}