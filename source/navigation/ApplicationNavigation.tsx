import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList, BottomTabParamList } from "./navigation";
import LoginPage from "../screens/AuthFlow/Login";
import SignUp from "../screens/AuthFlow/SignUp";
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


const AuthStack = createNativeStackNavigator<AuthStackParamList>();


export const AuthNavigator: React.FC = () => {
  
  return (
    <AuthStack.Navigator initialRouteName='SignUp' screenOptions={{ headerShown: false }}>
     <AuthStack.Screen name="SignUp" component={SignUp}/>
     <AuthStack.Screen name='LoginPage' component={LoginPage}/>
    </AuthStack.Navigator>
  );
}

export const TabNavigator = createBottomTabNavigator<BottomTabParamList>();

export const HomeTab: React.FC = () =>{
   
return <TabNavigator.Navigator initialRouteName='Home' screenOptions={{headerShown:false,
  tabBarStyle: {
    backgroundColor: PRIMARY_COLOR,
    borderTopColor: 'transparent'
  }}}>
    <TabNavigator.Screen name='Home' 
    options={{
      headerShown: false,
      tabBarLabel: ({ focused,color, }) => (
        focused ? <Text style={{color:"#FFF"}}>Home</Text> : <Text style={{color:"#93d2fe"}}>Home</Text>
    ),
      tabBarIcon: ({ focused,color, size }) => (
        focused ? <FontAwesome name='home' style={{height:25,width:25,color:"#FFF"}}/> : <FontAwesome name='home' style={{height:25,width:25,color:"#93d2fe"}}/>
    ),
  }}
    component={HomePage}/>
    <TabNavigator.Screen name='Orders' component={OrdersPage}
    options={{
	  headerShown: false,
      tabBarLabel: ({ focused,color, }) => (
        focused ? <Text style={{color:"#FFF"}}>Orders</Text> : <Text style={{color:"#93d2fe"}}>Orders</Text>
    ),
      // tabBarLabelStyle: { color: focused ? 'blue' : "#888888" },
      tabBarIcon: ({ focused,color, size }) => (
        focused ? <MaterialCommunityIcons name='truck-delivery' style={{height:25,width:25,color:"#FFF"}}/> : <MaterialCommunityIcons name='truck-delivery' style={{height:25,width:25,color:"#93d2fe"}}/>
    ),
    }}/>
	 <TabNavigator.Screen name='Reward' component={RewardsPage}
    options={{
	  headerShown: false,
      tabBarLabel: ({ focused,color, }) => (
        focused ? <Text style={{color:"#FFF"}}>Reward</Text> : <Text style={{color:"#93d2fe"}}>Reward</Text>
    ),
      tabBarIcon: ({ focused,color, size }) => (
        focused ? <FontAwesome6 name='award' style={{height:25,width:25,color:"#FFF"}}/> : <FontAwesome6 name='award' style={{height:25,width:25,color:"#93d2fe"}}/>
    ),
    }}/>
	 <TabNavigator.Screen name='Profile' component={Profile}
    options={{
	  headerShown: false,
      tabBarLabel: ({ focused,color, }) => (
        focused ? <Text style={{color:"#FFF"}}>Profile</Text> : <Text style={{color:"#93d2fe"}}>Profile</Text>
    ),
      tabBarIcon: ({ focused,color, size }) => (
        focused ? <FontAwesome5 name='' style={{height:25,width:25,color:"#FFF"}}/> : <FontAwesome5 name='' style={{height:25,width:25,color:"#93d2fe"}}/>
    ),
    }}/>
	</TabNavigator.Navigator>
}