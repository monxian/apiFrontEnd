import _ from 'lodash';
import { FETCH_ACTIVITIES, FETCH_ACTIVITY, DELETE_ACTIVITY} from '../actions';

//default state to an object 4:{ id, address, name}
export default function(state={}, action){
  switch (action.type) {
    case DELETE_ACTIVITY:
      return _.omit(state, action.payload);

    case FETCH_ACTIVITY:
      //es 5 form
      // const activity = action.payload.data;
      // const newState = { ...state };
      // newState[activity.id] = activity;
      // return newSate;
      //es 6 below
      //[] interpolation create a id key with value of action.payload.data
      return{...state, [action.payload.data._id]: action.payload.data};

    case FETCH_ACTIVITIES:
      //return (action.payload.data);
      // creates object with id{ 4: activity }
     return _.mapKeys(action.payload.data, '_id');

    default:
       return state;

  }
}
