import axios from 'axios'

const apiCall = axios.create({
    baseURL: process.env.API_BASE_URL || 'http://localhost:3000'
});

const fetchNumber = async (context) => {
    context.commit('LOAD_NUMBER_PENDING');
    let response;

    try {
        response = await apiCall.get('/api/number');

        if (response.data.success) {
            context.commit('LOAD_NUMBER_SUCCESS', response.data.number)
        } else {
            context.commit('LOAD_NUMBER_ERROR', response.data.code)
        }
    } catch (e) {
        context.commit('LOAD_NUMBER_ERROR', e.message)
    }
}

const incrementNumber = async (context) => {
    context.commit('INCREMENT_NUMBER_PENDING');
    let response;

    try {
        response = await apiCall.post('/api/number');

        if (response.data.success) {
            context.commit('INCREMENT_NUMBER_SUCCESS', response.data.number)
        } else {
            context.commit('INCREMENT_NUMBER_ERROR', response.data.code)
        }
    } catch (e) {
        context.commit('INCREMENT_NUMBER_ERROR', e.message);
    }
}

const updateNumber = async (context, number) => {
    context.commit('LOAD_NUMBER_SUCCESS', number)
}

export default {
    fetchNumber,
    incrementNumber,
    updateNumber,
};