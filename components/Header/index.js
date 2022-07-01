import React from 'react';
import Navbar from '../Navbar';
import UserInfo from '../UserInfo';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.svg';

import { HeaderContainer, LogoContainer } from './style';

function Header() {
    return (
        <HeaderContainer>
            <Link href="/">
                <LogoContainer>
                    <Image src={logo} alt='wine logo' />
                </LogoContainer>
            </Link>
            <Navbar />
            <UserInfo />
        </HeaderContainer>
    );
}

export default Header;
