import React from "react";
import { View,Text,Image, TextInput, SafeAreaView, Pressable } from "react-native";
import { PRIMARY_BACKGROUND_COLOR,PRIMARY_CARD_COLOR,PRIMARY_TEXT_COLOR } from "../../config";


const LoginWithOtpPage = ({navigation}) => {

    return(
        <>
        <SafeAreaView style={{flex:1,backgroundColor:PRIMARY_BACKGROUND_COLOR}}>
         <View style={{flex:1}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image
            source={require('../../../assets/images/god.jpeg')}
            style={{width:100,height:100}}
            />
            <Text style={{color:'red',fontFamily:'Poppins-Regular',fontSize:25,top:10}}>Login</Text>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:PRIMARY_TEXT_COLOR,fontFamily:'Poppins-Bold',fontSize:20}}>Enter Your Phone Number</Text>
            <Text style={{color:'gray',fontFamily:'Poppins-Medium',fontSize:15}}>We Will You Sent You 4 digit verification code</Text>
            <View style={{backgroundColor:'#FFFFFF',width:"80%",height:50,borderRadius:25,marginTop:20}}>
             <TextInput
             placeholder="Enter Phone Number"
             placeholderTextColor={PRIMARY_TEXT_COLOR}
             style={{fontFamily:'Poppins-Bold',fontSize:15}}
             />
            </View>
            <View style={{backgroundColor: PRIMARY_TEXT_COLOR,width:"80%",height:50,borderRadius:25,marginTop:20}}>
                <Pressable onPress={()=> navigation.navigate('OtpVerifyPage')}>
                  <Text style={{color:'#FFF',fontFamily:'Poppins-Bold',textAlign:'center',top:10,fontSize:15}}>SEND OTP</Text>
                </Pressable>
            </View>
          </View>
          <View style={{flex:0.5, justifyContent:'center',alignItems:'center',bottom:-50}}>
            <Text style={{color:'gray',fontFamily:'Poppins-Regular',fontSize:10}}>Copyrights @ Avanexa Technologies.com 2024</Text>
          </View>
         </View>
        </SafeAreaView>
        </>
    )
}

export default LoginWithOtpPage;