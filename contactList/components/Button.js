import React, { Component } from 'react';

import {Button, View, Text } from 'react-native';

class CustomButton extends Component {

    render() {
        return(
            <View style={{paddingBottom: 20}}>
                <Text style={{paddingLeft: 20}}>{this.props.item.firstName}</Text>
                <Button onPress={this.props.onPress} title="View"/>
            </View>
        );
    }
}

export default CustomButton;