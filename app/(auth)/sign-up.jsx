import { useState } from "react"
import { View, Text, ScrollView, Alert } from "react-native"
import { Link, router } from 'expo-router'
import { SafeAreaView } from "react-native-safe-area-context"
import { createUser } from "../../lib/appwrite.js"
import FormField from "../../components/FormField.jsx"
import CustomButton from "../../components/CustomButton.jsx"

const SignUp = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })
    
    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = async () => {
        if(form.username === "" || form.email === "" || form.password == ""){
            Alert.alert('Error', 'Please fill in all the fields')
        }

        setIsSubmitting(true);

        try {
            const result = await createUser(form.email, form.password, form.username)
            setUser(result)
            setIsLogged(true)
            
            router.replace('../(tabs)/home')
        }catch(error){
            Alert.alert('Error', error.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <SafeAreaView className='h-full bg-white'>
            <ScrollView>
                <View className='w-full min-h-[95vh] justify-center items-center'>
                    <Text className='font-Psemibold text-3xl justify-center
                    items-center my-10 p-4 text-black'>Register</Text>

                    <FormField 
                    title="username"
                    value={form.username}
                    handleChangeText={(e) => setForm({ ...form, username: e })}
                    otherStyles='mt-7'
                    />

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
                    containerStyles='my-7 bg-red w-[85vw] rounded-2xl'
                    textStyles='text-white font-Pmedium'
                    className='border-none'
                    isLoaded={isSubmitting}/>

                    <View className='justify-center pt-5 flex-row gap-2'>
                        <Text className='font-Pmedium text-black'>Have an account already? <Link className='font-Pbold' href='/sign-in'>Sign In</Link></Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp