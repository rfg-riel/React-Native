

import React, {Component} from 'react';
import PersonProfile from '../components/Profile';

export default class Profile extends Component {
    static navigationOptions = {
        title: 'Profile',
    };

    render() {
        return (
            <PersonProfile item={this.props.navigation.state.params.item}/>
        );
    }
}