import React from 'react';
import ProductCard from '../ProductCard';
import { ProductListContainer } from './style';

function ProductSection({ products }) {
    console.log(products);
    return (
        <ProductListContainer>
            {products.map(product => (
                <ProductCard product={product} key={product.id} />
            ))}
        </ProductListContainer>
    );
};

export default ProductSection;
