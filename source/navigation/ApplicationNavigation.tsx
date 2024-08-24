import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList, BottomTabParamList } from "./navigation";
import LoginPage from "../screens/AuthFlow/Login";
import SignUp from "../screens/AuthFlow/SignUp";
import LoginWithOtpPage from "../screens/AuthFlow/LoginWithOtp";
import HomePage from "../screens/Home";
import Profile from "../screens/Profile";
import OrdersPage from "../screens/orders";
import RewardsPage from "../screens/Rewards";
import { Text } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { PRIMARY_COLOR } from "../config";
import OtpVerifyPage from "../screens/AuthFlow/otpVerifyPage";


const AuthStack = createNativeStackNavigator<AuthStackParamList>();


export const AuthNavigator: React.FC = () => {
  
  return (
    <AuthStack.Navigator initialRouteName='SignUp' screenOptions={{ headerShown: false }}>
     <AuthStack.Screen name="SignUp" component={SignUp}/>
     <AuthStack.Screen name='LoginPage' component={LoginPage}/>
     <AuthStack.Screen name='LoginWithOtpPage' component={LoginWithOtpPage}/>
     <AuthStack.Screen name='OtpVerifyPage' component={OtpVerifyPage}/>
    </AuthStack.Navigator>
  );
}

export const TabNavigator = createBottomTabNavigator<BottomTabParamList>();

export const HomeTab: React.FC = () =>{
   
return <TabNavigator.Navigator initialRouteName='Home' screenOptions={{headerShown:false,
  tabBarStyle: {
    backgroundColor: '#007AFF',
    borderTopColor: 'transparent'
  }}}>
    <TabNavigator.Screen name='Home' 
    options={{
      headerShown: false,
      tabBarLabel: ({ focused,color, }) => (
        focused ? <Text style={{color:"#FFF",fontFamily:'Poppins-Bold'}}>Home</Text> : <Text style={{color:"#000000",fontFamily:'Poppins-Bold'}}>Home</Text>
    ),
      tabBarIcon: ({ focused,color, size }) => (
        focused ? <FontAwesome name='home' style={{fontSize:20,color:"#FFF"}}/> : <FontAwesome name='home' style={{fontSize:20,color:"#000000"}}/>
    ),
  }}
    component={HomePage}/>
    <TabNavigator.Screen name='Orders' component={OrdersPage}
    options={{
	  headerShown: false,
      tabBarLabel: ({ focused,color, }) => (
        focused ? <Text style={{color:"#FFF",fontFamily:'Poppins-Bold'}}>Orders</Text> : <Text style={{color:"#000000",fontFamily:'Poppins-Bold'}}>Orders</Text>
    ),
      // tabBarLabelStyle: { color: focused ? 'blue' : "#888888" },
      tabBarIcon: ({ focused,color, size }) => (
        focused ? <MaterialCommunityIcons name='truck-delivery' style={{fontSize:20,color:"#FFF"}}/> : <MaterialCommunityIcons name='truck-delivery' style={{fontSize:20,color:"#000000"}}/>
    ),
    }}/>
	 <TabNavigator.Screen name='Reward' component={RewardsPage}
    options={{
	  headerShown: false,
      tabBarLabel: ({ focused,color, }) => (
        focused ? <Text style={{color:"#FFF",fontFamily:'Poppins-Bold'}}>Reward</Text> : <Text style={{color:"#000000",fontFamily:'Poppins-Bold'}}>Reward</Text>
    ),
      tabBarIcon: ({ focused,color, size }) => (
        focused ? <FontAwesome6 name='award' style={{fontSize:20,color:"#FFF"}}/> : <FontAwesome6 name='award' style={{fontSize:20,color:"#000000"}}/>
    ),
    }}/>
	 <TabNavigator.Screen name='Profile' component={Profile}
    options={{
	  headerShown: false,
      tabBarLabel: ({ focused,color, }) => (
        focused ? <Text style={{color:"#FFF",fontFamily:'Poppins-Bold'}}>Profile</Text> : <Text style={{color:"#000000",fontFamily:'Poppins-Bold'}}>Profile</Text>
    ),
      tabBarIcon: ({ focused,color, size }) => (
        focused ? <FontAwesome name='user' style={{fontSize:20,color:"#FFF"}}/> : <FontAwesome name='user' style={{fontSize:20,color:"#000000"}}/>
    ),
    }}/>
	</TabNavigator.Navigator>
}