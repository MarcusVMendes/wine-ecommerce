import styled from 'styled-components';

export const Navigation = styled.nav`
    display: flex;
    height: 100%;
    left: -120px;
    position: relative;
    width: 479px;
`;

export const Ul = styled.ul`
    align-self: center;
    color: #555555;
    display: flex;
    justify-content: space-around;
    font-size: 18px;
    list-style: none;
    text-transform: uppercase;

    li {
        border-bottom: 2px solid transparent;
        padding: 0 15px;
    }
`;

export const LinkContainer = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: center;
    padding: 30px 0;
    width: 120px;
    margin-right: 5px;
    border-bottom: 2px solid transparent;
    &:hover {
        border-bottom: 2px solid #D14B8F;
        color: #D14B8F;
    }
`;