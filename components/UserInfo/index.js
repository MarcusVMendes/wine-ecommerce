import React from 'react';
import { UserContainer } from './style';
import { UserItem } from './style';
import Image from 'next/image';
import Link from 'next/link';
import lupa from '../../public/lupa.svg';
import person from '../../public/person.svg';
import winebag from '../../public/winebag.svg';

function UserInfo() {
    return (
        <UserContainer>
            <UserItem>
                <Link href="/">
                    <Image src={lupa} alt="lupa" />
                </Link>
            </UserItem>
            <UserItem>
                <Link href="/">
                    <Image src={person} alt="lupa" />
                </Link>
            </UserItem>
            <UserItem className="wine-bag">
                <Link href="/">
                    <Image src={winebag} alt="lupa" />
                </Link>
            </UserItem>
        </UserContainer>
    );
}

export default UserInfo;