export const serializePriceMember = (product) => {
    const { priceMember } = product;
    const [integer, decimal] = String(priceMember).split('.');
    if (decimal.length == 1) {
        let newDecimal = decimal + '0';
        return [integer, newDecimal];
    } else {
        return [integer, decimal];
    }
};

export const serializePriceNonMember = (product) => {
    const { priceNonMember } = product;
    const [integer, decimal] = String(priceNonMember).split('.');
    if (decimal === undefined) {
        let newDecimal = decimal + '00';
        return [integer, newDecimal];
    } else {
        return [integer, decimal];
    }
};