export const setCurrency = (currency) =>{
    return{
        type:'SET_CURRENCY',
        payload: currency,
    };
};
export const setCryptoCurrency = (cryptoCurrency) =>{
    return {
        type:'SET_CRYPTOCURRENCY',
        payload: cryptoCurrency,
    }
}
export const setMarketCap = (cryptoMarket) =>{
    return {
        type:'SET_CRYPTOMARKET',
        payload: cryptoMarket,
    }
}