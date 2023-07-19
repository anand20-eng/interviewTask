import { ADD_USER} from '../constant';

const initialState = {
    firstName: '',
    lastName: ''
};

// eslint-disable-next-line consistent-return
const addAuthentication = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            state = action.payload;
            console.log('action.payload =>', action.payload)
            return state;

        default: return state;
    }
};

export default addAuthentication;
