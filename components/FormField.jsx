import { useState } from "react"
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native"

import Icons from '../constants/Icons'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <View className={`w-[85vw] space-y-2 ${otherStyles} `}>
            <View className='h-16 px-5 justify-center items-center border-2 border-black-200 focus:border-black-200 rounded-lg flex-row'>
                <TextInput
                className='flex-1 font-Pmedium text-base'
                value={value}
                placeholder={title}
                placeholderTextColor='#ADADAD'
                onChangeText={handleChangeText}
                secureTextEntry={title === 'password' && !showPassword}
                />

                {title === 'password' && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image source={!showPassword ? Icons.visibilityOff : Icons.visibility}
                        className='w-6 h-6' resizeMode="contain"/>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField