import styled from 'styled-components';

export const SideBarContainer = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 240px;
    width: 256px;
    margin-top: 50px;
    /* background-color: red; */

    h2 {
        font-weight: 700;
        font-size: 24px;
        color: #000000;
        position: absolute;
        top: 90px;
    }

    h4 {
        font-weight: 700;
        font-size: 18px;
        color: #000000;
    }

    form {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
    }
    
    label {
        margin-bottom: 15px;
    }
`;
