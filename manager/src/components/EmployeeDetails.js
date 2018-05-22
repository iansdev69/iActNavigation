/**
 * @flow
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { 
    employeeUpdate,
    employeeCreate
} from '../actions';
import { 
    Card, 
    CardSection, 
    Button,
    Input,
    Spinner
} from './common';


type Props = {};

class EmployeeDetails extends Component<Props> {
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate( {name, phone, shift} );
    }
    render() {
        const { name, phone, shift  } = this.props;
        return (
            <Card>
                <CardSection>
                    <Input
                        value={ name }
                        label="Name"
                        placeholder="Ian"
                        onChangeText={value => this.props.employeeUpdate({prop:'name', value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        value={ phone }
                        label="Phone"
                        placeholder="555-555-5555"
                        onChangeText={value => this.props.employeeUpdate({prop:'phone', value})}
                    />
                </CardSection>
                    
                <CardSection >
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                       style={{flex:1}}
                        selectedValue={ shift }
                        onValueChange={value => this.props.employeeUpdate({prop:'shift', value})}
                        >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                        
                    </Picker>   
                </CardSection>

                <CardSection>
                    <Button
                        onPress={ this.onButtonPress.bind(this)}
                    > Create </Button>
                </CardSection>

                
            </Card>
        );
    }
};

// selectedValue={this.state.language}
//                         style={{ height: 50, width: 100 }}
//                         onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}


const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}
const mapStateToProps = (state) => {
    const {name, phone, shift } = state.employee;
   
    return {name, phone, shift };
}


export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeDetails);
