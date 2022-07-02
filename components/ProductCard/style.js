import styled from 'styled-components';

export const CardContainer = styled.div`
    align-items: center;
    background: #ffffff;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 333px;
    margin-bottom: 18px;
    width: 256px;

    &:hover {
        transform: scale(1.05);
        transition: all ease-out 0.2s;
    }

    .title {
        color: #1D1D1B;
        font-family: Lato;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: -0.222488px;
        line-height: 19.2px;
        max-width: 200px;
        text-align: center;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    height: 178.13px;
    justify-content: center;
    margin-top: 10px;
    min-height: 178.13px;
    width: 198.57px;
`;

export const OfferContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    min-height: 25px;
    min-width: 120px;

    p {
        color: #888888;
        font-family: Lato;
        font-size: 11px;
        text-decoration-line: line-through;
    }

    span {
        background: #F79552;
        border-radius: 1.94677px;
        color: #fff;
        font-family: Lato;
        font-size: 12px;
        line-height: 15px;
        font-weight: 700;
    }
`;

export const PartnerContainer = styled.div`
    align-items: center;
    display: flex;
    min-height: 25px;

    .describe {
        align-items: flex-end;
        color: #1d1d1b;
        display: flex;
        font-family: Lato;
        font-size: 13px;
        font-weight: 700;
        height: 30px;
        margin-right: 5px;
        text-transform: uppercase;
    }

    .member-price {
        align-items: center;
        color: #B6116E;
        display: flex;
        height: 30px;
    }

    .integer {
        font-size: 27px;
        font-weight: 700;
    }
`;

export const NonPartnerContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;

    span {
        color: #888888;
        font-family: Lato;
        font-size: 13px;
        font-weight: 700;
        /* line-height: 14px; */
        text-transform: uppercase;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    button {
        align-items: center;
        background: #7EBC43;
        border-radius: 3.89354px;
        box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
        border: none;
        color: #ffffff;
        cursor: pointer;
        height: 39.36px;
        margin-bottom: 15px;
        padding: 11.6806px 86px;
        text-transform: uppercase;
        width: 256px;
    }

    button:hover {
        background: green;
        font-weight: 700;
    }
`;
