import React from 'react';
import ProductCard from '../ProductCard';
import { ProductListContainer } from './style';

function ProductSection({ products, productsCount }) {
    return (
        <div>
            {/* <span>{productsCount} produtos encontrados</span> */}
            <ProductListContainer>
                {products.map(product => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </ProductListContainer>
        </div>
    );
};

export default ProductSection;
