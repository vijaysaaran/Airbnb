/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, Animated, ImageBackground, TextInput, TouchableOpacity, Dimensions, PanResponder, Slider, ToastAndroid, SafeAreaView, StatusBar, placeholder } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";
import { grey } from 'ansi-colors';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import Iconss from 'react-native-vector-icons/AntDesign';
import Iconsss from 'react-native-vector-icons/EvilIcons';
import Iconssss from 'react-native-vector-icons/MaterialIcons';

import { Container, Content, Header, Left, Right, Center, Card, CardItem, Thumbnail, Body, Button } from 'native-base';
import { Divider, } from 'react-native-elements';






const {height,width} = Dimensions.get('window')


class Explore extends React.Component {


  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
      <Image style={{ height: 24, width: 24, resizeMode: 'contain', tintColor: tintColor, }} source={{ uri: 'http://cdn.onlinewebfonts.com/svg/img_176566.png' }} />
    )



  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1, }}>

        <View style={{ flex: 1, }}>
          <View style={{ height: 80, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
            <View style={{
              flexDirection: 'row', padding: 10, backgroundColor: 'white', marginHorizontal: 10, shadowOffset: { width: 0, height: 0 },
              shadowColor: 'black',
              shadowOpacity: 0.2,
              elevation: 1,
            }}>
              <Icon name="ios-search" size={28} color="grey" />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try Bangalore"
                placeholderTextColor="grey"
                style={{
                  flex: 1, backgroundColor: 'white', fontWeight: 'bold', marginHorizontal: 12,

                }} />

            </View>

          </View>

          <ScrollView
            scrollEventThrottle={16}
          >
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', paddingHorizontal: 20 }}>
                What can we help you find , Vijay?
              </Text>
            </View>

            <View style={{ height: 130, marginTop: 20 }}>

              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', }}>
                  <View style={{ height: 200, padding: 10, flexDirection:'row' }}>
                    <View style={{ flex: 2, flexDirection:'row' }}>
                      <Image style={{ height: 130, width: 130, resizeMode: 'contain', marginRight: 20, borderWidth: 0.5, borderColor: '#dddddd' }} source={require('./src/app/assests/Austin_7309955_dining_001-677x451.jpg')} />
                      <Image style={{ height: 130, width: 130, resizeMode: 'contain', marginRight: 20, borderWidth: 0.5, borderColor: '#dddddd' }} source={require('./src/app/assests/ftd-mal-a43dd0be-2e89-4055-9329-97f0fc2fdb79.jpg')} />
                      <Image style={{ height: 130, width: 130, resizeMode: 'contain', marginRight: 20, borderWidth: 0.5, borderColor: '#dddddd' }} source={require('./src/app/assests/635576962979691267-Top-Photo-In-Post.jpg')} />
                      <Image style={{ height: 130, width: 130, resizeMode: 'contain', marginRight: 20, borderWidth: 0.5, borderColor: '#dddddd' }} source={require('./src/app/assests/Austin_7309955_dining_001-677x451.jpg')} />
                      <Image style={{ height: 130, width: 130, resizeMode: 'contain', marginRight: 20, borderWidth: 0.5, borderColor: '#dddddd' }} source={require('./src/app/assests/ftd-mal-a43dd0be-2e89-4055-9329-97f0fc2fdb79.jpg')} />
                      <Image style={{ height: 130, width: 130, resizeMode: 'contain', marginRight: 20, borderWidth: 0.5, borderColor: '#dddddd' }} source={require('./src/app/assests/635576962979691267-Top-Photo-In-Post.jpg')} />
                      <Image style={{ height: 130, width: 130, resizeMode: 'contain', marginRight: 20, borderWidth: 0.5, borderColor: '#dddddd' }} source={require('./src/app/assests/Austin_7309955_dining_001-677x451.jpg')} />
                      <Image style={{ height: 130, width: 130, resizeMode: 'contain', marginRight: 20, borderWidth: 0.5, borderColor: '#dddddd' }} source={require('./src/app/assests/ftd-mal-a43dd0be-2e89-4055-9329-97f0fc2fdb79.jpg')} />
                      <Image style={{ height: 130, width: 130, resizeMode: 'contain', marginRight: 20, borderWidth: 0.5, borderColor: '#dddddd' }} source={require('./src/app/assests/635576962979691267-Top-Photo-In-Post.jpg')} />
                      <Image style={{ height: 130, width: 130, resizeMode: 'contain', marginRight: 20, borderWidth: 0.5, borderColor: '#dddddd' }} source={require('./src/app/assests/Austin_7309955_dining_001-677x451.jpg')} />
                      <Image style={{ height: 130, width: 130, resizeMode: 'contain', marginRight: 20, borderWidth: 0.5, borderColor: '#dddddd' }} source={require('./src/app/assests/ftd-mal-a43dd0be-2e89-4055-9329-97f0fc2fdb79.jpg')} />
                      <Image style={{ height: 130, width: 130, resizeMode: 'contain', marginRight: 20, borderWidth: 0.5, borderColor: '#dddddd' }} source={require('./src/app/assests/635576962979691267-Top-Photo-In-Post.jpg')} />
                      <Image style={{ height: 130, width: 130, resizeMode: 'contain', marginRight: 20, borderWidth: 0.5, borderColor: '#dddddd' }} source={require('./src/app/assests/Austin_7309955_dining_001-677x451.jpg')} />
                      <Image style={{ height: 130, width: 130, resizeMode: 'contain', marginRight: 20, borderWidth: 0.5, borderColor: '#dddddd' }} source={require('./src/app/assests/ftd-mal-a43dd0be-2e89-4055-9329-97f0fc2fdb79.jpg')} />
                      <Image style={{ height: 130, width: 130, resizeMode: 'contain', marginRight: 20, borderWidth: 0.5, borderColor: '#dddddd' }} source={require('./src/app/assests/635576962979691267-Top-Photo-In-Post.jpg')} />
                      
                    </View>
                  </View>
                </View>
              </ScrollView>

            </View>
                <View style={{marginTop:40,paddingHorizontal:20,}}>
                <Text style={{fontSize:24,fontWeight:'bold'}}>Introducing Airbnb Plus</Text>
                <Text style={{fontWeight:'400',marginTop:10,}}>
                A new selection of homes are verified for quality and comfort
                </Text>
                </View>  

                <View style={{marginTop:20,padding:5,height:400}}>
                <Image style={{ flex:1,height:null,width:null,resizeMode:'cover',borderRadius:3,borderWidth:1,borderColor:'#dddddd',}} source={require('./src/app/assests/washington-mt-rainier-cabin-winter-luxury-airbnb-rental-winterairbnb1018.jpg')} />
                
                </View>

                <View style={{marginTop:5,padding:10,height:400}}>
                <Image style={{ flex:1,height:null,width:null,resizeMode:'cover',borderRadius:3,borderWidth:1,borderColor:'#dddddd',}} source={require('./src/app/assests/6-Cozy-Cabins-Schell-Wheeler-Cabin.jpg')} />
                
                </View>



                <View style={{marginTop:40,paddingHorizontal:20,}}>
                <Text style={{fontSize:24,fontWeight:'bold'}}>Homes around the world</Text>
                <Text style={{fontWeight:'400',marginTop:10,}}>
                Introducing Airbnb Plus
                </Text>
                </View>  

                <View style={{marginTop:20,padding:5,height:400}}>
                <Image style={{ flex:1,height:200,width:400,resizeMode:'cover',borderRadius:3,borderWidth:1,borderColor:'#dddddd',}} source={require('./src/app/assests/LivAbility-Edition-13-Tucson-Poets-Studio-room01-WPHeader.jpg')} />
                
                </View>

                <View style={{marginTop:5,padding:10,height:400}}>
                <Image style={{ flex:1,height:200,width:400,resizeMode:'cover',borderRadius:3,borderWidth:1,borderColor:'#dddddd',}} source={require('./src/app/assests/Cazadero-Cabin-in-California-Redwoods-6.jpg')} />
                
                </View>

          </ScrollView>

        </View>

      </SafeAreaView>
    );
  }
}


class Saved extends React.Component {
  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
      <Image style={{ height: 28, width: 28, resizeMode: 'contain', tintColor: tintColor, }} source={{ uri: 'http://icons.iconarchive.com/icons/icons8/ios7/256/Gaming-Hearts-icon.png' }} />
    )



  };
  render() {
    return (
      <View style={styles.container}>

        <Text style={{ fontWeight: 'bold' }}>Play</Text>






      </View>
    );
  }
}

class Trips extends React.Component {
  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
      <Image style={{ height: 28, width: 28, resizeMode: 'contain', tintColor: tintColor, }} source={{ uri: 'https://cdn2.iconfinder.com/data/icons/rental-icon/240/airbnb-512.png' }} />
    )



  };
  render() {
    return (
      <View style={styles.container}>

        <Text style={{ fontWeight: 'bold' }}>Play</Text>






      </View>
    );
  }
}

class Inbox extends React.Component {
  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
      <Image style={{ height: 30, width: 28, resizeMode: 'contain', tintColor: tintColor, }} source={{ uri: 'https://png.pngtree.com/svg/20160811/ios_chatbubble_outline_1107091.png' }} />
    )



  };
  render() {
    return (
      <View style={styles.container}>

        <Text style={{ fontWeight: 'bold' }}>Play</Text>






      </View>
    );
  }
}


class Profile extends React.Component {
  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
      <Image style={{ height: 26, width: 26, resizeMode: 'contain', tintColor: tintColor, }} source={{ uri: 'https://cdn2.iconfinder.com/data/icons/lightly-icons/30/user-480.png' }} />
    )



  };
  render() {
    return (
      <View style={styles.container}>

        <Text style={{ fontWeight: 'bold' }}>Play</Text>






      </View>
    );
  }
}


const DashBoardTabNavigator = createBottomTabNavigator({
  Explore: Explore,
  Saved: Saved,
  Trips: Trips,
  Inbox: Inbox,
  Profile: Profile,
},
  {

    style: {
      ...Platform.select({
        android: { backgroundColor: 'white' }
      })
    },
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        backgroundColor: 'white',
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
      },
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      tabBarIcon: { activeTintColor: '#000', inactiveTintColor: '#d1cece' },
      showLabel: true,
      showIcon: true,
    }
  }
);

export default createAppContainer(DashBoardTabNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});