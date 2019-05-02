/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, ActivityIndicator, View, Alert} from 'react-native';
import Person from '../api/mockPersonApi';
import CustomButton from '../components/Button';
import { Cache } from "react-native-cache";
import AsyncStorage from '@react-native-community/async-storage';

type Props = {};
export default class Home extends Component<Props> {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}

        this._onPressPersonName = this._onPressPersonName.bind(this);

    }

    static navigationOptions = {
        title: 'Home',
    };

    _onPressPersonName(details) {
      this.props.navigation.navigate('Profile', {item:details})
    }

    // simulate consuming of API
    componentDidMount(){

        // init cache
        let cache = new Cache({
            namespace: "ContactList",
            policy: {
                maxEntries: 50000
            },
            backend: AsyncStorage
        });

        let hasPersonJson = false;

        // for testing to remove cache
        cache.removeItem("PersonJson", function(err) {

        });

        // check cache
        cache.getItem("PersonJson", function(err, value) {
            if(value !== ''){
                hasPersonJson = true;
            }
        });

        // use cache
        if(hasPersonJson){
            this.setState({
                isLoading: false,
                personDataSource: Person.getPerson(),
            });
        } // download copy
        else {
            return fetch('https://facebook.github.io/react-native/movies.json')
                .then((response) => response.json())
                .then((responseJson) => {
                    cache.setItem("PersonJson", Person.getPerson(), function(err) {

                    });

                    this.setState({
                        isLoading: false,
                        personDataSource: Person.getPerson(),
                    });

                })
                .catch((error) =>{
                    console.error(error);
                });
        }
    }

    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={{flex: 1, paddingTop:20}}>
                <FlatList
                    data={this.state.personDataSource}
                    renderItem={({item}) => <CustomButton item={item} onPress={() => this._onPressPersonName(item)}/>}
                    keyExtractor={({id}, index) => id}
                />
            </View>
        );
    }
}