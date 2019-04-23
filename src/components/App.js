
import React, { Component } from 'react';
import { View } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Spinner, Card, CardSection } from './common'
import InputForm from './InputForm';


export default class App extends Component {

  state = {
    loggedIn: null
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBMeuhyXdLgPg-91nKYY6C_rpeOTUlug8o",
      authDomain: "auth-cb162.firebaseapp.com",
      databaseURL: "https://auth-cb162.firebaseio.com",
      projectId: "auth-cb162",
      storageBucket: "auth-cb162.appspot.com",
      messagingSenderId: "898572452344"
    });

    // this can update the state of App any point of time
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderForm = () => {
    switch (this.state.loggedIn) {
      case true:
        return (<Card>
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        </Card>
        );
      case false:
        return <InputForm />;
      default:
        return <Spinner size={'large'} />;
    }
  }

  render() {
    return (
      // to make it scrollable
      <View style={{ flex: 1 }}>
        <Header headerText={'Authentication'} />
        {this.renderForm()}
      </View>
    );
  }
}

