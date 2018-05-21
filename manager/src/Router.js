import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginFrom';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar >
                <Scene key="auth" >
                    <Scene key="login" component={ LoginForm } title="Please Login" initial/>
                </Scene>   
                <Scene key="main" initial>
                    <Scene key="employeeList" component={ EmployeeList } title="List of Employee"  initial/>
                    <Scene key="employeeDetails" component={ EmployeeDetails } title="List of Employee" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent