const LOAD_NUMBER_PENDING = (state) => {
    const newState = {
        busy: true,
        number: null,
        errorMessage: null,
    };

    state.number = newState;
}

const LOAD_NUMBER_SUCCESS = (state, number) => {
    const newState = {
        busy: false,
        number: number,
        errorMessage: null,
    };

    state.number = newState;
}

const LOAD_NUMBER_ERROR = (state, error) => {
    const newState = {
        busy: false,
        number: null,
        errorMessage: error,
    };

    state.number = newState;
}

const INCREMENT_NUMBER_PENDING = (state) => {
    const newState = {
        ...state.number,
        busy: true,
    };

    state.number = newState;
}

const INCREMENT_NUMBER_SUCCESS = (state, number) => {
    const newState = {
        busy: false,
        number: number,
        errorMessage: null,
    };

    state.number = newState;
}

const INCREMENT_NUMBER_ERROR = (state, error) => {
    const newState = {
        busy: false,
        number: null,
        errorMessage: error,
    };

    state.number = newState;
}

export default {
    LOAD_NUMBER_PENDING,
    LOAD_NUMBER_SUCCESS,
    LOAD_NUMBER_ERROR,
    INCREMENT_NUMBER_PENDING,
    INCREMENT_NUMBER_SUCCESS,
    INCREMENT_NUMBER_ERROR,
};