import React from 'react';
import { navigationLinks } from '../../utils/data';
import Link from 'next/link';

import { Navigation, Ul, LinkContainer } from './style';

function Navbar() {
    return (
        <Navigation>
            <Ul>
                {navigationLinks.map((link, index) => (
                    <Link href={link.path} key={index}>
                        <LinkContainer >
                            <li >
                                {link.label}
                            </li>
                        </LinkContainer>
                    </Link>
                ))}
            </Ul>
        </Navigation>
    );
}

export default Navbar;
