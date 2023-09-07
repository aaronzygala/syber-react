import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import HomePage from'./HomePage';
import ChatPage from'./ChatPage';
import FriendsPage from'./FriendsPage';
import SettingsPage from'./SettingsPage';

import { Text, View } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'
import BoldHome from '../assets/icons/bold/home-2';
import BoldChats from '../assets/icons/bold/messages-2';
import BoldUsers from '../assets/icons/bold/profile-2user';
import BoldSettings from '../assets/icons/bold/setting-2';

import OutlineChats from '../assets/icons/outline/messages-2';
import OutlineHome from '../assets/icons/outline/home-2';
import OutlineUsers from '../assets/icons/outline/profile-2user';
import OutlineSettings from '../assets/icons/outline/setting-2';

import CupIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import CupPage from './CupPage';
// import {TabIcon} from './TabIcons';
// import {Box, Center} from 'native-base';

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FDFEFF',
          height: 80,
          paddingVertical: 15,
        },

        tabBarIcon: ({ focused, color, size }) => {
          let Icon;

          if (route.name === 'Home') {
            Icon = focused ? BoldHome : OutlineHome;
          }
          else if (route.name === 'Chat'){
            Icon = focused ? BoldChats : OutlineChats
          }
          else if (route.name === 'Friends'){
            Icon = focused ? BoldUsers : OutlineUsers
          } 
          else if (route.name === 'Settings') {
            Icon = focused ? BoldSettings : OutlineSettings
          }
          return (
            <View className="justify-center items-center">
              <Icon fill={color}/>
              <Text className={`text-xs ${focused ? 'text-[#386BF6]' : 'text-zinc-500'}`}>
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarActiveTintColor: '#386BF6',
        tabBarInactiveTintColor: '#888888',
      })}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Chat" component={ChatPage} />
      <Tab.Screen
        name="Cup"
        component={CupPage}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View className="absolute bottom-1.5 bg-[#9DB2CE] rounded-full">
                <View className="border-[#ffffff] z-10 p-4 m-1 rounded-full bg-[#386BF6]">
                  <CupIcon name={`${focused ? 'cup' : 'cup-outline'}`} color={'#fff'} size={24}/>
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen name="Friends" component={FriendsPage} />
      <Tab.Screen name="Settings" component={SettingsPage} />
    </Tab.Navigator>
  );
}

export default TabNavigator;