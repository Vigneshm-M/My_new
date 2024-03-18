import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from "react-native";
import { AuthStackScreenPrpos } from "../../navigation/navigation";
import { isStrongPassword,validateEmailAddress,validateMobileNumber } from "../../common";
import { useToast } from "react-native-toast-notifications";
import { signIn } from "../../service";
import { PRIMARY_COLOR } from "../../config";
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
    // dispatch(loginAction())
    // navigation.navigate('Home')
    // return
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

      <View style={styles.text}>

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder='name'
            placeholderTextColor={PRIMARY_COLOR}
            returnKeyType={'next'}
            value={name}
            keyboardType={'default'}
            autoCapitalize="none"
            onChangeText={(text) => setName(text)}
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder='EmailOrPhone'
            placeholderTextColor={PRIMARY_COLOR}
            returnKeyType={'next'}
            value={userEntry}
            keyboardType={'default'}
            autoCapitalize="none"
            onChangeText={(text) => setUserEntry(text)}
          />
        </View>
        {/* <View>{<Text style={{color:'red',fontSize:12}}>{errMeg}</Text>}</View> */}
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder='Password'
          placeholderTextColor={PRIMARY_COLOR}
            returnKeyType={'done'}
            secureTextEntry={showPassword}
            value={password}
            keyboardType={'default'}
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}  
          />
          {/* <View style={{flex:0.1}}>
                  {password !== '' && showPassword == true ? (
                    <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}>
                    <Entypo 
                    name='eye'
                    style={{color:'black',fontSize:20}}
                    />
                    </TouchableOpacity>
                  ) : password !== '' && showPassword == false ? (
                    <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}>
                    <Entypo
                     name='eye-with-line'
                     style={{color:'black',fontSize:20}}
                    />
                    </TouchableOpacity>
                  ) : null}
            </View> */}
        </View>

      </View>

      <View>

        <TouchableOpacity onPress={() => doSignIn()} style={styles.login}>
          <Text
            style={{ color: 'white', fontFamily: 'Poppins-Bold', fontSize: 15, textAlign: 'center' }}
          >SIGNUP</Text>
        </TouchableOpacity>
      </View>


      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
          marginTop: 20,
          marginLeft: 40,
          marginRight: 40,
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
        <Text style={{ marginHorizontal: 10, color: PRIMARY_COLOR, fontFamily:'Poppins-Bold' }}>Or</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
      </View>
      <View

        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
          marginBottom: 20,
        }}>

      </View>


      <View style={styles.bottom}>

        <View style={styles.signupContainer}>

          <Text style={{ color: '#4D7CBC', paddingTop: 2 ,fontFamily:'Poppins-Medium'}}>Already have a Account</Text>

          <TouchableOpacity onPress={()=> navigation.navigate("LoginPage")} style={styles.signupWrapper}>
            <Text style={styles.signupText}>SignIn</Text>
          </TouchableOpacity>

        </View>
      </View>

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