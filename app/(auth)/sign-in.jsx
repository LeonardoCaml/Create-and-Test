import { View, Text, ScrollView, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link, router } from 'expo-router'

import FormField from "../../components/FormField.jsx"
import CustomButton from "../../components/CustomButton.jsx"

import { useState } from "react"
import { getCurrentUser, signIn } from "../../lib/appwrite.js"

const SignIn = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = () => {
        router.replace('../(tabs)/home')

        // if(form.email === "" || form.password === ""){
        //     Alert.alert('Error', 'Please fill in all the fields')
        // }

        // setIsSubmitting(true);

        // try {
        //     await signIn(form.email, form.password);
        //     const result = await getCurrentUser();
        //     setUser(result);
        //     setIsLogged(true);

        //     Alert.alert("Success", "User SignIn in successfully")
        //     router.replace('../(tabs)/home')
        // }catch(error){
        //     Alert.alert('Error', error.message)
        // } finally {
        //     setIsSubmitting(false)
        // }
    }

    return (
        <SafeAreaView className='h-full bg-white'>
            <ScrollView>
                <View className='w-full min-h-[100vh] justify-center items-center'>
                    <Text className='font-Psemibold text-3xl justify-center
                    items-center my-10 p-4 text-black'>Sign In</Text>

                    <FormField 
                        title="email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e})}
                        otherStyles='mt-7'
                        keyboardType='email-address'
                    />

                    <FormField 
                        title="password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e})}
                        otherStyles='mt-7'
                    />

                    <CustomButton
                        title='Confirm'
                        handlePress={submit}
                        containerStyles='my-7 bg-red w-[85vw]'
                        textStyles='text-white font-Pmedium'
                        className='border-none'
                        isLoaded={isSubmitting}
                    />

                    <View className='justify-center pt-5 flex-row gap-2'>
                        <Text className='font-Pmedium text-black'>Click from <Link className='font-Pbold' href='/sign-up'>Sign Up</Link> here</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn