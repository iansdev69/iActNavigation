/**
 * @flow
 */
import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import { 
    Card, 
    CardSection, 
    Button,
    Input,
    Spinner
} from './common';


type Props = {};

class EmployeeDetails extends Component<Props> {
   
    render() {
        const { email, password } = this.props;
        return (
            <Card>
                <CardSection>
                    <Text> Employee Details </Text>
                </CardSection>

                
            </Card>
        );
    }
};




export default EmployeeDetails;
