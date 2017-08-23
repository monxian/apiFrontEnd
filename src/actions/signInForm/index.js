import React from 'react';
import axios from 'axios';
import { history } from 'react-router-dom';
import {AUTH_USER, AUTH_ERROR}  from '../types';

const ROOT_URL = 'https://monxian.online/api/v1/account/login';
//api server post.login
//           get.logout
//           post.register

export function signInUser({email, password},callback){

  //redux-thunk returns a function redux-promise returns an object
  //allows you to step in before its reduced
    return function(dispatch){

      //submit email/password to server
      //es6 shortcut {email:email, password: password}
      axios.post(`${ROOT_URL}`,{email, password})
      .then(response =>{
        // if request is good ...
        // -update state to indicate user is authenicated
        dispatch({type: AUTH_USER});

        //-save the jwt token
        localStorage.setItem('token', response.data.token);

        //-redirect to route '/activities from page'
        // redirected in the component components/auth/signin.js
        callback();
      })
      .catch(()=>{
        // if request is bad...
        // -show the error to the user
        dispatch(authError(' Bad username/password'));
      });

  }
}



export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
