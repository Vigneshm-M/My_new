import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { AuthStackScreenPrpos } from "../../navigation/navigation";
import { isStrongPassword,validateEmailAddress,validateMobileNumber } from "../../common";
import { useToast } from "react-native-toast-notifications";
import { signIn } from "../../service";
import { PRIMARY_BACKGROUND_COLOR, PRIMARY_COLOR, PRIMARY_TEXT_COLOR } from "../../config";
import Entypo from 'react-native-vector-icons/Entypo'
import { UseDispatch, useDispatch } from "react-redux";
import { loginAction } from "../../store/userAction";

interface SignUpProps extends AuthStackScreenPrpos {
    // Add any additional props here
  }
  
  const SignUp: React.FC<SignUpProps> = ({ navigation }) => {

   const [name, setName] = useState<string>('')
   const [userEntry, setUserEntry] = useState<string>('')
   const [password, setPassword] = useState<string>('')
   const [showPassword, setShowPassword] = useState<boolean>(true);
    
  const Toast = useToast();

  const dispatch = useDispatch()

  const doSignIn = async () => {
    dispatch(loginAction())
    navigation.navigate('Home')
    return
    try{

       if(!name.length){
        Toast.show("Enter the name",{
        type: "custom",
        placement: "bottom",
        duration: 4000,
        // offset: 30,
        animationType: "slide-in",
        })
        return false
       }if(!userEntry){
        Toast.show("Enter the valid EmailOrMobile Number",{
          type: "custom",
          placement: "bottom",
          duration: 4000,
          // offset: 30,
           animationType: "slide-in",
        })
         return false
       }
       if(!validateEmailAddress(userEntry)){
        Toast.show("Kindly enter valid mail id",{
          type: "custom",
          placement: "bottom",
          duration: 4000,
          // offset: 30,
           animationType: "slide-in",
        })
         return false
       }
       if(!password){
        Toast.show('Enter the password',{
          type: "custom",
          placement: "bottom",
          duration: 4000,
          // offset: 30,
           animationType: "slide-in",
        })
        return false
       }
       if (password.length < 6) {
        Toast.show('Password is required Min 6 Characters',{
          type: "custom",
          placement: "bottom",
          duration: 4000,
          // offset: 30,
           animationType: "slide-in",
        })
        return false;
      }if (isStrongPassword(password)) {
        Toast.show('Password must contain at least\none uppercase  letter,\none lowercase letter,\none number,\nand one special character (@$!%*?&^_+=`"|/:;(){},-)',{
          type: "custom",
          placement: "bottom",
          duration: 4000,
          // offset: 30,
           animationType: "slide-in",
        })
      return false
      }

       let reqdata = {
        name: name,
        email: userEntry,
        password: password
       }

       const response = await signIn(reqdata)
       if(response === true){
          
          Toast.show('signIn sucessfully',{
            type: "custom",
            placement: "bottom",
            duration: 4000,
            // offset: 30,
             animationType: "slide-in",
          })
          dispatch(loginAction())
          navigation.navigate('Home')
       }else{
        Toast.show("signIn failed",{
          type: "custom",
          placement: "bottom",
          duration: 4000,
          // offset: 30,
           animationType: "slide-in",
        })
       }

    }catch(e){
      Toast.show('Something Went Wrong , please try again..!!',{
        type: "custom",
        placement: "bottom",
        duration: 4000,
        // offset: 30,
         animationType: "slide-in",
      })
       console.error(e)

    }
  }

    return(
        <>
        <SafeAreaView style={{flex:1,backgroundColor:PRIMARY_BACKGROUND_COLOR}}>
           <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
             <Text style={{color:PRIMARY_TEXT_COLOR,fontFamily:'Poppins-Bold',fontSize:25}}>SIGNUP</Text>
             <View style={{backgroundColor:'#FFFFFF',width:"95%",height:50,borderRadius:15,marginTop:20}}>
             <TextInput
             placeholder="Enter Name"
             placeholderTextColor={PRIMARY_TEXT_COLOR}
             style={{fontFamily:'Poppins-Bold',fontSize:15}}
             />
             </View>
             <View style={{backgroundColor:'#FFFFFF',width:"95%",height:50,borderRadius:15,marginTop:20}}>
             <TextInput
             placeholder="Enter Email"
             placeholderTextColor={PRIMARY_TEXT_COLOR}
             style={{fontFamily:'Poppins-Bold',fontSize:15}}
             />
             </View>
             <View style={{backgroundColor:'#FFFFFF',width:"95%",height:50,borderRadius:15,marginTop:20}}>
             <TextInput
             placeholder="Enter Phone Number"
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
                <Pressable onPress={()=> doSignIn()}>
                  <Text style={{color:'#FFF',fontFamily:'Poppins-Bold',textAlign:'center',top:10,fontSize:15}}>SIGNUP</Text>
                </Pressable>
            </View>
            <Text style={{color: PRIMARY_TEXT_COLOR,fontFamily:'Poppins-Regular',fontSize:15}}>Or</Text>
            <View style={{flexDirection:'row',top:10}}>
             <Text style={{color:PRIMARY_TEXT_COLOR,fontSize:15,fontFamily:'Poppins-Regular'}}>Already have a Account</Text>
             <Pressable onPress={()=> navigation.navigate('LoginPage')}>
             <Text style={{color:PRIMARY_TEXT_COLOR,fontSize:15,fontFamily:'Poppins-Bold,',textDecorationLine:'underline'}}>SignIn</Text>
             </Pressable>
             </View>
            <View style={{justifyContent:'center',alignItems:'center',bottom:-110}}>
            <Text style={{color:'gray',fontFamily:'Poppins-Regular',fontSize:10}}>Copyrights @ Avanexa Technologies.com 2024</Text>
          </View>
           </View>
        </SafeAreaView>

        </>
    )
  }

  export default SignUp;

  const styles = StyleSheet.create({

    login: {
      padding: 10,
      paddingBottom: 10,
      borderRadius: 5,
      textAlign: 'center',
      marginTop: 30,
      marginBottom: 15,
      // width: 310,
      // height: 35,
      justifyContent: 'center',
      backgroundColor: PRIMARY_COLOR,
      marginRight: 30,
      marginLeft: 30,
      alignItems: 'center',
      alignContent: 'center',
    },
  
    acc: {
      marginBottom: 20,
      textAlign: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    welcome: {
      // paddingTop: 30,
      // paddingLeft: 25,
      color: '#135D95',
      fontFamily: 'Poppins-Bold',
      fontSize: 28,
      // fontWeight: 400,
      // fontWeight: "bold",
  
    },
  
    sign: {
      color: '#56B0F4',
      // fontWeight: '800',
      fontFamily: 'Poppins-Medium',
      // paddingLeft: 25,
      paddingTop: 2,
      fontSize: 20,
    },
  
    container: {
      marginVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#9E9E9E',
      marginHorizontal: 20,
      fontFamily: 'Poppins-Bold',
      fontStyle: 'italic',
      flexDirection: "row",
      display: "flex"
    },
    input: {
      fontSize: 16,
      // color: '#000',
      fontFamily: 'Poppins-Medium',
      // fontWeight: 'bold',
      flex:1
    },
  
    text: {
      paddingTop: 30,
  
    },
  
    pass: {
      color: PRIMARY_COLOR,
      textAlign: 'center',
      fontWeight: 'bold',
      paddingTop: 5,
    },
  
    social: {
      color: PRIMARY_COLOR,
      textAlign: 'center',
      fontFamily: 'Poppins-Bold',
      fontSize: 18,
      // fontWeight: 'bold',
      paddingBottom: 2,
      paddingTop: 50,
    },
  
    icons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '50%',
      // marginBottom: 10,
      marginLeft: 80,
      paddingTop: 10,
    },
  
    signup: {
      textAlign: 'center',
      textDecorationLine: 'underline',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    bottom: {
      flexDirection: 'row',
      textAlign: 'center',
      justifyContent: 'center',
    },
  
    signupWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      flexDirection: 'row',
    },
  
    signupText: {
      textDecorationLine: 'underline',
      color: PRIMARY_COLOR,
      flexDirection: 'row',
      fontFamily:'Poppins-Medium'
    },
  
    back: {
      paddingTop: 30,
      marginLeft: 20,
    },
  
    iconbackground: {
      backgroundColor: '#fff',
      borderColor: PRIMARY_COLOR,
      borderWidth: 2,
      padding: 10,
      borderRadius: 30,
      shadowColor: PRIMARY_COLOR,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.25,
      shadowRadius: 5,
      elevation: 5,
    },
  
    signupContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 2,
      marginTop: 1,
    },
  
    iconimage: {
      backgroundColor: '#fff',
      borderColor: PRIMARY_COLOR,
      borderWidth: 2,
      padding: 10,
      borderRadius: 30,
      shadowColor: PRIMARY_COLOR,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.25,
      shadowRadius: 5,
      elevation: 5,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
    }
  
  
  
  
  })