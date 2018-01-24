import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBQEA91IiqTcQ8iSL2OMXB7FtCfBLrIXzo",
    authDomain: "jchand-cc13c.firebaseapp.com",
    databaseURL: "https://jchand-cc13c.firebaseio.com",
    projectId: "jchand-cc13c",
    storageBucket: "jchand-cc13c.appspot.com",
    messagingSenderId: "765063084920"
};
firebase.initializeApp(config);
// const db = firebase.database();
// const dbRef = db.ref().child('data');
// dbRef.on('value', snapshot => {
//     this.setState({
//         data: snapshot.val()
//     });
// });

import NavigationBar from './components/header';
import Footer from './components/footer';
import Body from './components/body';

// Construct our APP component using functional component.
class App extends Component {
    constructor(props){
        super(props);
        this.state = { speed: 10 }
    }
    //Used for real-time db;
    componentDidMount() {
        const rootRef = firebase.database().ref().child('react');
        rootRef.child('Name');
        rootRef.on('value', snapshot => {
            this.setState({
                data: snapshot.val()
            });
        });
    }
    render() {
        return (
            <div>
                <NavigationBar />
                <Body/>
                {this.state.speed }
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('.container-fluid')
);