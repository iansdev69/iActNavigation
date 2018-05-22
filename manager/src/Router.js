import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginFrom';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar >
                <Scene key="auth" initial>
                    <Scene key="login" component={ LoginForm } title="Please Login"/>
                </Scene>   
                <Scene key="main" >
                    <Scene 
                        rightTitle="+"
                        onRight={()=> { Actions.EmployeeDetails() }}
                        key="employeeList" 
                        component={ EmployeeList } 
                        title="List of Employee"  
                        initial/>
                    <Scene key="EmployeeDetails" component={ EmployeeDetails } title="Create Employee" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent