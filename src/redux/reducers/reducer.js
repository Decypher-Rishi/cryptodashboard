const initialState = {
    currency: [],
    cryptoCurrency: [],
    cryptoMarket: [],
}

export const currencyReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_CURRENCY':
            return { ...state, currency: payload };
        case 'SET_CRYPTOCURRENCY':
            return { ...state, cryptoCurrency: payload };
        case 'SET_CRYPTOMARKET':
            return { ...state, cryptoMarket: payload };
        default:
            return state;
    }
}
