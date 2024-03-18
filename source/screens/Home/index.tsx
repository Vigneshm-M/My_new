import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from "react-native";
import { BottomTabScreenProps } from "../../navigation/navigation";
import { PRIMARY_COLOR } from "../../config";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../store/userAction";

interface SignUpProps extends BottomTabScreenProps {
    // Add any additional props here
  }
  
  const HomePage: React.FC<SignUpProps> = ({ navigation }) => {
    const dispatch = useDispatch()
    return(
        <>
        <View style={{flex:1, justifyContent:'center'}}>
          <Text style={{color:'red',fontSize:25}}>
            welcome to Home page
          </Text>
          <TouchableOpacity onPress={()=> dispatch(logoutAction())} style={{padding: 10,
    paddingBottom: 10,
    borderRadius: 5,
    // textAlign: 'center',
    marginTop: 30,
    marginBottom: 15,
    // width: 310,
    // height: 35,
    justifyContent: 'center',
    backgroundColor: PRIMARY_COLOR,
    marginRight: 30,
    marginLeft: 30,
    alignItems: 'center',
    alignContent: 'center',}}>
          <Text
            style={{ color: 'white', fontFamily: 'Poppins-Bold', fontSize: 15, textAlign: 'center' }}
          >LOGOUT</Text>
        </TouchableOpacity>
      </View>

  
        </>
    )
  }

  export default HomePage;