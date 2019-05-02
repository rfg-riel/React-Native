import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';

class Profile extends Component {

    getAge(dateString){

        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
        {
            age--;
        }

        return age;
    }
    render() {

        let age = this.getAge(this.props.item.birthday);

        return(
            <View style={styles.childContainer}>
                <Text style={styles.textContainer}>First Name: {this.props.item.firstName}</Text>
                <Text style={styles.textContainer}>Last Name: {this.props.item.lastName}</Text>
                <Text style={styles.textContainer}>Birthday: {this.props.item.birthday}</Text>
                <Text style={styles.textContainer}>Age: {age}</Text>
                <Text style={styles.textContainer}>Email Address: {this.props.item.email}</Text>
                <Text style={styles.textContainer}>Mobile Number: {this.props.item.mobileNumber}</Text>
                <Text style={styles.textContainer}>Address: {this.props.item.address}</Text>
                <Text style={styles.textContainer}>Contact Person: {this.props.item.contactPerson}</Text>
                <Text style={styles.textContainer}>Contact Person/'s Phone Number: {this.props.item.contactPersonPhoneNumber}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    childContainer: {
        paddingTop: 5,
        paddingBottom: 5
    },
    textContainer: {
        paddingBottom: 20
    }
});

export default Profile;