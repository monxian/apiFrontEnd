import axios from 'axios';

export const FETCH_ACTIVITIES = 'fetch_activities';
export const FETCH_ACTIVITY = 'fetch_activity';
export const CREATE_ACTIVITY='create_activity';
export const DELETE_ACTIVITY='delete_activity';

const ROOT_URL = 'https://monxian.online/api/v1';

export function fetchActivities(){
  const request = axios.get(`${ROOT_URL}/qactivity`);

  return {
    type: FETCH_ACTIVITIES,
    payload: request
  };
}

export function createNewActivity(values, callback){
  const request = axios.post(`${ROOT_URL}/qactivity/add`, values)
  .then(()=> callback());

  return {
    type: CREATE_ACTIVITY,
    payload: request
  };
}

export function fetchActivity(id){

  const request = axios.get(`${ROOT_URL}/qactivity/`+ id);

  return{
    type:FETCH_ACTIVITY,
    payload: request
  }
}

export function deleteActivity(id, callback){
  const request = axios.delete(`${ROOT_URL}/qactivity/`+ id)
  .then(()=>callback());

  return{
    type: DELETE_ACTIVITY,
    payload: id
  }
}
