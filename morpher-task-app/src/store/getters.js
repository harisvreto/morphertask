const busy = (state) => {
    return state.number.busy;
}

const number = (state) => {
    return state.number.number;
}

const errorMessage = (state) => {
    return state.number.errorMessage;
}

export default {
    busy,
    number,
    errorMessage,
};