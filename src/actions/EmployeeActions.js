import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone }) => {

  return (dispatch) => {
    firebase.database().ref('/employees/').push({ name, phone })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
      Actions.pop();
    });
  };
};


export const employeesFetch = () => {
  // collect data from the firebase
  return (dispatch) => {
    firebase.database().ref('/employees').on('value', snapshot => {
      dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const employeeSave = ({ name, phone, uid }) => {

  console.log(name);
  console.log(phone);

  return (dispatch) => {
    firebase.database().ref(`/employees/${uid}`)
      .set({ name, phone })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.pop();
      });
    };
};

export const employeeDelete = ({ uid }) => {

  return (dispatch) => {
    firebase.database().ref(`/employees/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.pop();
      });
  };
};
