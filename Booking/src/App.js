import React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Users from './Users';
import Admin from './Admin';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Tab = createMaterialTopTabNavigator();

function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({

        tabBarIcon :({focused, size, color}) => {

          let iconName;
          if(route.name==='Users'){
            iconName= 'user-friends';
            size = focused ? 20 : 20;
          
           
          } else if (route.name==='Admin'){
            iconName= 'user-shield';
            size = focused ? 20 : 20;
            
           

          }
          return(
            <FontAwesome5
              name={iconName}
              size = {size}
              color = {color}
            />  
          
          )

        }
      })}
      tabBarOptions={{
        activeTintColor: '#FF5733',
        inactiveTintColor : '#272120' ,
        activeBackgroundColor : '#6F1E10',
        inactiveBackgroundColor: '#EA5838',
        showLabel: true,
        labelStyle : {fontSize : 14},
        showIcon : true,

        

      }}
      activeColor = '#f0edf6'
      inactiveColor = '#3e2465'
      barStyle = {{backgroundColor : '#694fad'}}
      >
        <Tab.Screen 
          name="Users"
          component={Users}
          
        />
        <Tab.Screen 
          name="Admin"
          component={Admin}
         
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


export default App;
