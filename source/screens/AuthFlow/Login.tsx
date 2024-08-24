import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { AuthStackScreenPrpos } from "../../navigation/navigation";
import { login } from "../../service";
import { useToast } from "react-native-toast-notifications";
import { PRIMARY_BACKGROUND_COLOR, PRIMARY_COLOR, PRIMARY_TEXT_COLOR } from "../../config";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/userAction";
  interface LoginPageProps extends AuthStackScreenPrpos {
    // Add any additional props here
  }
  
  const LoginPage: React.FC<LoginPageProps> = ({ navigation }) => {


  const [userEntry, setUserEntry] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(true)
  const dispatch = useDispatch()

  const Toast = useToast();
  
  const doLogin = async () => {
    try{
      if(!userEntry){
        Toast.show("Enter the  EmailOrMobile Number",{
          type: "custom",
          placement: "bottom",
          duration: 4000,
          // offset: 30,
           animationType: "slide-in",
        })
        return false
      }
      if(!password){
        Toast.show("Enter the  valid Password",{
          type: "custom",
          placement: "bottom",
          duration: 4000,
          // offset: 30,
           animationType: "slide-in",
        })
        return false
      }
      let reqdata = {
        email: userEntry,
        password: password
      }
      const response = await login(reqdata);
      if( response === true){
        Toast.show("Login successfully",{
          type: "custom",
          placement: "bottom",
          duration: 4000,
          // offset: 30,
           animationType: "slide-in",
        })
          dispatch(loginAction())
          navigation.navigate('Home')
      }else{
        Toast.show("Login failed",{
          type: "custom",
          placement: "bottom",
          duration: 4000,
          // offset: 30,
           animationType: "slide-in",
        })
      }
    }catch(e){
      Toast.show("somethig went wrong , please try again..!!",{
        type: "custom",
        placement: "bottom",
        duration: 4000,
        // offset: 30,
         animationType: "slide-in",
      })
       console.error(e,"somethig went wrong , please try again")
    }
  }


    return(
        <>
        <SafeAreaView style={{flex:1,backgroundColor:PRIMARY_BACKGROUND_COLOR}}>
        <View style={{flex:1}}>
           <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:PRIMARY_TEXT_COLOR,fontFamily:'Poppins-Bold',fontSize:25}}>LOGIN</Text>
           </View>
           <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
           <View style={{backgroundColor:'#FFFFFF',width:"95%",height:50,borderRadius:15,marginTop:20}}>
             <TextInput
             placeholder="Enter Email/Phone Number"
             placeholderTextColor={PRIMARY_TEXT_COLOR}
             style={{fontFamily:'Poppins-Bold',fontSize:15}}
             />
             </View>
             <View style={{backgroundColor:'#FFFFFF',width:"95%",height:50,borderRadius:15,marginTop:20}}>
             <TextInput
             placeholder="Enter Password"
             placeholderTextColor={PRIMARY_TEXT_COLOR}
             style={{fontFamily:'Poppins-Bold',fontSize:15}}
             />
             </View>
             <View style={{backgroundColor: PRIMARY_TEXT_COLOR,width:"90%",height:50,borderRadius:25,marginTop:20}}>
                <Pressable onPress={()=> console.log("====>Presss")}>
                  <Text style={{color:'#FFF',fontFamily:'Poppins-Bold',textAlign:'center',top:10,fontSize:15}}>LOGIN</Text>
                </Pressable>
            </View>
            <View style={{backgroundColor: PRIMARY_TEXT_COLOR,width:"90%",height:50,borderRadius:25,marginTop:20}}>
                <Pressable onPress={()=> navigation.navigate('LoginWithOtpPage')}>
                  <Text style={{color:'#FFF',fontFamily:'Poppins-Bold',textAlign:'center',top:10,fontSize:15}}>LOGIN WITH OTP</Text>
                </Pressable>
            </View>
             <Text style={{color:PRIMARY_TEXT_COLOR,fontSize:15,fontFamily:'Poppins-Regular',top:10}}>or</Text>
             <View style={{flexDirection:'row',top:10}}>
             <Text style={{color:PRIMARY_TEXT_COLOR,fontSize:15,fontFamily:'Poppins-Regular'}}>Account</Text>
             <Pressable onPress={()=> navigation.navigate('SignUp')}>
             <Text style={{color:PRIMARY_TEXT_COLOR,fontSize:15,fontFamily:'Poppins-Bold,',textDecorationLine:'underline'}}>SignUp</Text>
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

  export default LoginPage;


  