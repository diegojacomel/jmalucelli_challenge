/* Modules */
import { combineReducers } from 'redux';

/* Reducers */
import { reducer as formReducer } from 'redux-form';

// all the reducers are in one place
const rootReducers = combineReducers({
    form: formReducer,
})

export default rootReducers;