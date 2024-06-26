import { ScrollView, View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '../components/CustomButton.jsx';
import icons from '../constants/Icons.js'
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
            <Text className='text-2xl font-Pmedium text-center mt-10'>Welcome Home</Text>
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

          <View className='w-[210px] justify-between flex-row mb-10'>
          <Image className='w-10 h-10'
            source={icons.snapchat}/>
          <Image className='w-10 h-10'
            source={icons.instagram}/>
          <Image className='w-10 h-10'
            source={icons.facebook}/>
          </View>
          
          <Text className='text-xs font-Pmedium my-7'>Register by | LeonardoCamelo</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}