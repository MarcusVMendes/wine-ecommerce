import React from 'react';
import Image from 'next/image';
import { StampContainer } from './style';
import stamp from '../../public/selo.svg';

function Stamp() {
    return (
        <StampContainer>
            <Image src={stamp} alt='stamp' className='stamp' />
        </StampContainer>
    );
}

export default Stamp;
