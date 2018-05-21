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

class EmployeeList extends Component<Props> {
   
    render() {
        const { email, password } = this.props;
        return (
            <Card>
                <CardSection>
                    <Text> Hello </Text>
                </CardSection>

                
            </Card>
        );
    }
};




export default EmployeeList;
