import firebase from 'firebase';
import { 
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE
} from '../actions/types';

export const employeeUpdate = ( {prop, value }) => {
    return {
        "type": EMPLOYEE_UPDATE,
        "payload" : {prop, value}
   };
};

employeeCreate

export const employeeCreate = ({name, phone, shift = "Monday"}) => {
    const { currentUser } = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({name, phone, shift});
};