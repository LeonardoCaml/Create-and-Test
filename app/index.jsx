import { ScrollView, View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '../components/CustomButton.jsx';
import Img from '../constants/Images.js';

import { useGlobalContext } from '../context/GlobalProvider.js';

export default function App() {
  const {isLoading, isLoggedIn} = useGlobalContext()

  if(!isLoading && isLoggedIn) return <Redirect href='../(tabs)/home' />

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className='w-full flex-col justify-between items-center h-[100vh]'>
          <View className='relative mb-8'>
            <Image
            source={Img.initial}
            className='w-[100vw] h-[330]'/>
            <Text className='text-3xl font-Pmedium text-center mt-10'>Welcome Home</Text>
          </View>

          <View>
            <CustomButton
            title='Login'
            handlePress={() => router.push('./sign-in')}
            containerStyles="border border-black-400 w-[220px] my-3"/>
            <CustomButton
            title='Sign Up'
            textStyles='text-white'
            handlePress={() => router.push('./sign-up')}
            containerStyles="bg-red w-[220px] my-3"/>
          </View>
          
          <Text className='text-xs font-Psemibold my-5'>Register by | leonardocamelo20@gmail.com</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}