import React, { Component } from 'react'
import firebase from 'firebase';
import { Text } from 'react-native'
import { Card, CardSection, Button, Input, Spinner } from './common'

export default class InputForm extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    submitForm = () => {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess)
                    .catch(this.onLoginFailure)
            })
    }

    onLoginSuccess = () => {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onLoginFailure = () => {
        this.setState({
            error: 'Authentication Failed',
            loading: false
        });
    }

    renderButton = () => {
        if (this.state.loading) {
            return <Spinner size={'small'} />
        }
        return (
            <Button onPress={this.submitForm}>Log In</Button>
        )
    }

    render = () => {
        return (
            <Card>
                <CardSection>
                    <Input
                        label={'Email'}
                        placeholder={'user@email.com'}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label={'Password'}
                        placeholder={'password'}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        )
    }

}

const styles = {
    errorTextStyle: {
        fontSize: 18,
        color: 'red',
        alignSelf: 'center'
    }
};