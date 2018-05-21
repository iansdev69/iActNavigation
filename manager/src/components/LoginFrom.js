/**
 * @flow
 */
import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { 
    Card, 
    CardSection, 
    Button,
    Input,
    Spinner
} from './common';
import { 
    emailChanged, 
    passwordChanged,
    loginUser
} from '../actions';

type Props = {};

class LoginFrom extends Component<Props> {
    onEmailChanged(text) {
        this.props.emailChanged(text);
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }

    onButtonPressed(text) {
        const { email, password } = this.props;
        this.props.loginUser(email, password);
    }
    
    renderError() {
        if (this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorText} > {this.props.error} </Text>
                </View>
            )
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />
        } 

        return (
            <Button onPress={ this.onButtonPressed.bind(this) }>
                Login
            </Button>
        )
    }
    render() {
        const { email, password } = this.props;
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChanged.bind(this)}
                        value={ email }
                    />
                </CardSection>

                <CardSection>
                <Input
                    secureTextEntry
                    label="Password"
                    placeholder="password"
                    value={ password }
                    onChangeText={this.onPasswordChanged.bind(this)}
                />
                </CardSection>
                { this.renderError() }
                <CardSection>
                    { this.renderButton() }
                </CardSection>
            </Card>
        );
    }
};

const styles = {
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({ auth })  => {
    const { email, password, error, loading  } = auth;
    return {
        email: email,
        password: password,
        error: error,
        loading: loading
    }
}


export default connect(mapStateToProps,
    {
        emailChanged, 
        passwordChanged, 
        loginUser
    }
)(LoginFrom);
