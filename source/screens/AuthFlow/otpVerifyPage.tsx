import React from "react";
import { View,Text } from "react-native";
import { PRIMARY_BACKGROUND_COLOR, PRIMARY_TEXT_COLOR } from "../../config";

const OtpVerifyPage = () => {
    return(
        <>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:PRIMARY_BACKGROUND_COLOR}}>
            <Text style={{color:PRIMARY_TEXT_COLOR,fontFamily:'Poppins-Bold',fontSize:20}}>OTP VERIFY PAGE</Text>
        </View>
        </>
    )
}

export default OtpVerifyPage;