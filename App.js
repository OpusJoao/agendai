import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native";
import SelectDate from "./src/components/SelectDate";
import SelectHour from "./src/components/SelectHour";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome";
import Home from "./src/components/Home";


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {

  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route})=>({
            tabBarIcon: ({focused}) => {
              const color = focused ? '#FCA351': '#B7B7B7'
              let icon

              if(route.name === 'Home'){
                icon = <Icon name="calendar-plus-o" size={24} color={color} />
              }else if(route.name === 'Today'){
                icon = <Icon name="calendar-check-o" size={24} color={color} />
              }else if(route.name === 'Settings'){
                icon = <Icon name="sliders" size={24} color={color} />
              }
              

              return icon 
            },
            tabBarShowLabel: false,
            headerShown: false
          })}
        >
          <Tab.Screen
            name="Home"
            component={Home}
          />
          <Tab.Screen
            name="Today"
            component={SelectHour}
          />
          <Tab.Screen
            name="Settings"
            component={SelectDate}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );

};

export default App;
