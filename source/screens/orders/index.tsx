import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from "react-native";
import { BottomTabScreenProps } from "../../navigation/navigation";

interface OrdersProps extends BottomTabScreenProps {
    // Add any additional props here
  }
  
  const OrdersPage: React.FC<OrdersProps> = ({ navigation }) => {
    return(
        <>
        <View style={{flex:1, justifyContent:'center'}}>
          <Text style={{color:'red',fontSize:25}}>
            welcome to Orders page
          </Text>
          </View>
        </>
    )
  }

  export default OrdersPage;