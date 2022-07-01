import React from 'react';
import { CardContainer, ImageContainer } from './style';
import Image from 'next/image';

function ProductCard({ product }) {
    return (
        <CardContainer>
            <ImageContainer>
                <Image src={product.image} alt={product.name} width={100} height={100} />
            </ImageContainer>
        </CardContainer>
    );
}

export default ProductCard;
