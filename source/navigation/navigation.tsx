import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import StackScreenProps from '@react-navigation/native-stack'
export type AuthStackParamList = {
	LoginPage: undefined;
	SignUp: undefined;
	LoginWithOtpPage: undefined;
	OtpVerifyPage: undefined;
}

export type AuthStackScreenPrpos = StackScreenProps<AuthStackParamList>;

type BottomTabParamList = {
	HomePage: undefined;
  };

export type BottomTabScreenProps = BottomTabScreenProps<BottomTabParamList>;