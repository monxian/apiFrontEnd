import { combineReducers } from 'redux';
import ActivityReducer from './reducer_activities';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  activities: ActivityReducer,
  form: formReducer,
  auth: authReducer
});

export default rootReducer;
