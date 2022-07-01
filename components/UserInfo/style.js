import styled from 'styled-components';

export const UserContainer = styled.div`
    display: flex;
`;

export const UserItem = styled.div`
    border: 2px solid #555555;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    height: 56px;
    margin-right: 20px;
    width: 56px;

    &.wine-bag {
        background: #F6B554;
    }
    
    :hover {
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.15);
        transform: scale(1.1);
        transition: all ease-out 0.2s;
    }
`;