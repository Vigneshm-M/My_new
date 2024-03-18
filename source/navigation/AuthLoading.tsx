import { AuthNavigator,HomeTab } from "./ApplicationNavigation";
import { ToastProvider } from "react-native-toast-notifications";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";


const AuthLoadingScreen = () =>{
	
	const isAuthenticated = useSelector((state: RootState) => state.userData.isAuthenticated);
	
	return (
	
				<ToastProvider>
				<NavigationContainer>
					{isAuthenticated ? <HomeTab/> : <AuthNavigator/>}
				</NavigationContainer>
				</ToastProvider>
	);
}

export default  AuthLoadingScreen;
