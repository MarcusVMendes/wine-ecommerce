import { React, useState, useEffect } from 'react';
import Image from 'next/image';
import Stamp from '../Stamp';
import { serializePriceMember, serializePriceNonMember } from '../../utils/serialize';
import {
    CardContainer,
    ImageContainer,
    OfferContainer,
    PartnerContainer,
    NonPartnerContainer,
    Wrapper
} from './style';

function ProductCard({ product }) {
    const [priceMember, setPriceMember] = useState([]);
    const [priceNonMember, setPriceNonMember] = useState([]);

    useEffect(() => {
        setPriceMember(serializePriceMember(product));
        setPriceNonMember(serializePriceNonMember(product));
    }, [product]);

    return (
        <Wrapper>
            <CardContainer>
                <ImageContainer>
                    <Image src={product.image} alt={product.name} width={120} height={175} className='product-image' />
                    <Stamp className='stamp' />
                </ImageContainer>
                <h2 className='title'>{product.name}</h2>
                <OfferContainer>
                    <p>{`R$ ${product.price}0`}</p>
                    <span>{`${product.discount}% OFF`}</span>
                </OfferContainer>
                <PartnerContainer>
                    <span className='describe'>Sócio Wine</span>
                    <div className='member-price'>
                        <span>
                            R$ <span className='integer'>{priceMember[0]}</span>,
                            <span className='decimal'>{priceMember[1]}</span>
                        </span>
                    </div>
                </PartnerContainer>
                <NonPartnerContainer>
                    <span>Não Sócio {`R$ ${priceNonMember[0]},${priceNonMember[1]}`}</span>
                </NonPartnerContainer>
            </CardContainer>
            <button>Adicionar</button>
        </Wrapper>
    );
}

export default ProductCard;
