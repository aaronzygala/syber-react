import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { isValidEmail } from './Utils';
import FormInput from './components/FormInput'
import TermsCheckbox from './components/Checkbox'; 
import ButtonWithIcon from './components/ButtonWithIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import {Svg, Path} from 'react-native-svg';

const GoogleIcon = () => {
  return(
    <Svg width="20" height="20" viewBox="0 0 18 18" fill="none">
      <Path d="M8.99988 7.36365V10.8491H13.8435C13.6308 11.97 12.9925 12.9191 12.0353 13.5573L14.9562 15.8237C16.658 14.2528 17.6398 11.9455 17.6398 9.20465C17.6398 8.56648 17.5826 7.95278 17.4762 7.36375L8.99988 7.36365Z" fill="#4285F4"/>
      <Path d="M3.95602 10.713L3.29725 11.2173L0.965393 13.0336C2.4463 15.9709 5.48153 18 8.99968 18C11.4296 18 13.4669 17.1982 14.956 15.8237L12.0351 13.5573C11.2333 14.0973 10.2105 14.4246 8.99968 14.4246C6.65969 14.4246 4.67157 12.8455 3.9597 10.7182L3.95602 10.713Z" fill="#34A853"/>
      <Path d="M0.965384 4.96631C0.351781 6.17717 0 7.54355 0 8.99989C0 10.4562 0.351781 11.8226 0.965384 13.0335C0.965384 13.0416 3.95998 10.7098 3.95998 10.7098C3.77998 10.1698 3.67359 9.59715 3.67359 8.9998C3.67359 8.40245 3.77998 7.82975 3.95998 7.28976L0.965384 4.96631Z" fill="#FBBC05"/>
      <Path d="M8.99987 3.58363C10.3253 3.58363 11.5035 4.0418 12.4444 4.92545L15.0217 2.34821C13.4589 0.891874 11.4299 0 8.99987 0C5.48171 0 2.4463 2.02091 0.965393 4.96637L3.9599 7.29001C4.67167 5.16271 6.65988 3.58363 8.99987 3.58363Z" fill="#EA4335"/>
    </Svg>
  )
}

const SignUpForm = ({ onSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    onSignUp(username);
  };

  const isEmailValid = (email: string) => {
    // Implement your email validation logic here
    // For example, using regex or a validation library
    return isValidEmail(email);
  };

  return (
    <View className="w-[331px]">
      <FormInput
        title="Email Address"
        placeholderText={"Enter your email"}
        onChange={setEmail}
      />
      <FormInput
        title="Password"
        placeholderText={"Enter your password"}
        onChange={setPassword}
      />
      <View className="flex flex-row">
        <TermsCheckbox checkBoxText={"Remember Me"}/>
        <Text className="text-red-600 text-center text-xs font-medium ml-auto">Forgot Password</Text>
      </View>



      <TouchableOpacity
        className="bg-[#043A8E] rounded-lg px-5 py-2.5 mt-[40px]"

        disabled={!username || !password || !isEmailValid(email)}
        onPress={handleSignUp}
      >
        <Text
          className="text-white text-sm font-light text-center"
        >
          Login
        </Text>

      </TouchableOpacity>

      <View className="flex flex-row mt-10">
        <View
          className="flex-none justify-self-start mt-auto mb-auto w-[105px] min-w-[1em] h-[1px] bg-black opacity-100 dark:opacity-50">
        </View>
        <Text className="flex-1 justify-self-center text-xs font-light text-center">Or Login With</Text>
        <View
          className="flex-none justify-self-end mt-auto mb-auto w-[105px] min-w-[1em] h-[1px] bg-black opacity-100 dark:opacity-50">
        </View>
      </View>

      <View className="flex flex-row space-x-[29px] mt-4 mb-10">

        <View>
          <ButtonWithIcon icon={<Icon name="logo-facebook" size={24} color={"#1877F2"}/>} buttonText={"Facebook"}/>
        </View>

        <View>
          <ButtonWithIcon icon={<GoogleIcon/>} buttonText={"Google"}/>
        </View>

      </View>

      <View className="items-center ">

        <View className="flex flex-row">
          <Text className="text-xs">Don't have an account?</Text> 
          <Text className="text-[#043A8E] text-xs ml-1 font-bold">Sign Up</Text>
        </View>


      </View>

    </View>
  );
};

const SignUpPage = () => {
  const handleSignUp = (username: any) => {
    // Perform sign-up logic here, e.g., API call, user creation, etc.

    // Navigate to another page on successful sign-up
    // You can use React Navigation for navigation in React Native apps.
    // For this example, we'll simulate navigation with an alert.
    Alert.alert(`Successfully signed up as ${username}`);
  };

  return (
    <View className="h-screen flex pl-6 justify-center">
      <View
        className="justify-start mb-8"
      >
        <Text
          className="font-medium text-2xl "
        >Hi, Welcome Back!</Text>
        <Text
          className="font-light text-xs"
        >Sign in to monitor your cups</Text>
      </View>

      <SignUpForm onSignUp={handleSignUp} />
    </View>
  );
};

export default SignUpPage;
