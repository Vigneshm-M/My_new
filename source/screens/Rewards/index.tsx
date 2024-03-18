import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from "react-native";
import { BottomTabScreenProps } from "../../navigation/navigation";

interface RewardsProps extends BottomTabScreenProps {
    // Add any additional props here
  }
  
  const RewardsPage: React.FC<RewardsProps> = ({ navigation }) => {
    return(
        <>
        <View style={{flex:1, justifyContent:'center'}}>
          <Text style={{color:'red',fontSize:25}}>
            welcome to Rewards page
          </Text>
          </View>
        </>
    )
  }

  export default RewardsPage;